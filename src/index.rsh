'reach 0.1';

const Player = {
  ...hasRandom,
  getFingers: Fun([], UInt),
  getGuess: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null)
}

const [isFinger, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6)
const [isGuess, GUESS_ZERO, GUESS_ONE, GUESS_TWO, GUESS_THREE, GUESS_FOUR, GUESS_FIVE] = makeEnum(6)
const [isOutcome, A_WINS, B_WINS, DRAW] = makeEnum(3)

const winner = (getAFingers, getAGuess, getBFingers, getBGuess) => {
  const totalFingers = getAFingers + getBFingers
  if (getAGuess == totalFingers) {
    return A_WINS
  } else if (getBGuess == totalFingers) {
    return B_WINS
  } else if (getAGuess == getBGuess) {
    return DRAW
  } else {
    return DRAW
  }
}
assert(winner(ZERO, GUESS_ZERO, ZERO, GUESS_FIVE) == A_WINS, 'Expected an outcome of A_wins')
assert(winner(ZERO, GUESS_FIVE, ZERO, GUESS_ZERO) == B_WINS, 'Expected an outcome of B_wins')
assert(winner(ZERO, GUESS_FIVE, ZERO, GUESS_ONE) == DRAW, 'Expected a Draw outcome')


assert(isOutcome(winner(ZERO, GUESS_ZERO, ZERO, GUESS_FIVE)))

forall(UInt, getAFingers =>
  forall(UInt, getAGuess =>
    forall(UInt, getBFingers =>
      forall(UInt, getBGuess =>
        assert(isOutcome(winner(getAFingers, getAGuess, getBFingers, getBGuess)))
      ))))

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...Player,
    acceptWager: Fun([UInt], Null)
  });
  init();
  const informTimeout = () => {
    each([A, B], () => {
      interact.informTimeout()
    });
  }
  // The first one to publish deploys the contract
  A.only(() => {
    const wager = declassify(interact.wager)
    const deadline = declassify(interact.deadline)
  });
  A.publish(wager, deadline)
    .pay(wager);
  commit();

  // The second one to publish always attaches
  B.only(() => {
    interact.acceptWager(wager);
  });
  B.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(A, informTimeout));

  var outcome = DRAW
  invariant(balance() == (wager * 2) && isOutcome(outcome))
  while (outcome == DRAW) {
    commit()

    A.only(() => {
      const getAGuess = declassify(interact.getGuess())
      const _getAFingers = interact.getFingers()
      const [_commitA, _saltA] = makeCommitment(interact, _getAFingers)
      const commitA = declassify(_commitA)
    });
    A.publish(commitA, getAGuess)
      .timeout(relativeTime(deadline), () => closeTo(B, informTimeout));
    commit()

    unknowable(B, A(_getAFingers, _saltA))

    B.only(() => {
      const getBFingers = declassify(interact.getFingers());
      const getBGuess = declassify(interact.getGuess());
    });
    B.publish(getBFingers, getBGuess)
      .timeout(relativeTime(deadline), () => closeTo(A, informTimeout));
    commit()

    A.only(() => {
      const saltA = declassify(_saltA)
      const getAFingers = declassify(_getAFingers)
    });
    A.publish(saltA, getAFingers);
    checkCommitment(commitA, saltA, getAFingers)

    outcome = winner(getAFingers, getAGuess, getBFingers, getBGuess)
    continue
  }

  assert(outcome == A_WINS || outcome == B_WINS)

  transfer(wager * 2).to(outcome === A_WINS ? A : B)
  commit()

  each([A, B], () => {
    interact.seeOutcome(outcome)
  });
  // write your program here
  exit();
});