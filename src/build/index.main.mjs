// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const v271 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v272 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v272, v271],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:64:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v272, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v276, v277], secs: v279, time: v278, didSend: v57, from: v275 } = txn1;
      
      sim_r.txns.push({
        amt: v276,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v288 = stdlib.safeAdd(v278, v277);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v276, v277], secs: v279, time: v278, didSend: v57, from: v275 } = txn1;
  ;
  const v288 = stdlib.safeAdd(v278, v277);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v288],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v275, v276, v277, v288],
      evt_cnt: 0,
      funcNum: 2,
      lct: v278,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v422, time: v421, didSend: v227, from: v420 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v275,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v422, time: v421, didSend: v227, from: v420 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:56:29:application',
      fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:73:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v294, time: v293, didSend: v66, from: v292 } = txn2;
    const v296 = stdlib.add(v276, v276);
    ;
    let v297 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    let v298 = v293;
    let v305 = v296;
    
    let txn3 = txn2;
    while (await (async () => {
      const v313 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      
      return v313;})()) {
      const v320 = stdlib.safeAdd(v298, v277);
      const v324 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:81:53:application',
        fs: ['at ./index.rsh:80:11:application call to [unknown function] (defined at: ./index.rsh:80:15:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v325 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:82:47:application',
        fs: ['at ./index.rsh:80:11:application call to [unknown function] (defined at: ./index.rsh:80:15:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v326 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:83:48:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:80:11:application call to [unknown function] (defined at: ./index.rsh:80:15:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v327 = stdlib.digest([ctc0, ctc0], [v326, v325]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v275, v276, v277, v292, v305, v320, v327, v324],
        evt_cnt: 2,
        funcNum: 4,
        lct: v298,
        onlyIf: true,
        out_tys: [ctc1, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:86:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v330, v331], secs: v333, time: v332, didSend: v94, from: v329 } = txn4;
          
          ;
          const v341 = stdlib.safeAdd(v332, v277);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v320],
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc1, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v275, v276, v277, v292, v305, v320],
          evt_cnt: 0,
          funcNum: 5,
          lct: v298,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v388, time: v387, didSend: v178, from: v386 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v292,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v388, time: v387, didSend: v178, from: v386 } = txn5;
        ;
        const v389 = stdlib.addressEq(v275, v386);
        const v390 = stdlib.addressEq(v292, v386);
        const v391 = v389 ? true : v390;
        stdlib.assert(v391, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:87:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:56:29:application',
          fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:87:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v330, v331], secs: v333, time: v332, didSend: v94, from: v329 } = txn4;
        ;
        const v334 = stdlib.addressEq(v275, v329);
        stdlib.assert(v334, {
          at: './index.rsh:86:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v341 = stdlib.safeAdd(v332, v277);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v341],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v275, v276, v277, v292, v305, v330, v331, v341],
            evt_cnt: 0,
            funcNum: 7,
            lct: v332,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v370, time: v369, didSend: v144, from: v368 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v275,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc1, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v370, time: v369, didSend: v144, from: v368 } = txn6;
          ;
          const v371 = stdlib.addressEq(v275, v368);
          const v372 = stdlib.addressEq(v292, v368);
          const v373 = v371 ? true : v372;
          stdlib.assert(v373, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:97:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:56:29:application',
            fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:97:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v348, v349], secs: v351, time: v350, didSend: v106, from: v347 } = txn5;
          ;
          const v352 = stdlib.addressEq(v292, v347);
          stdlib.assert(v352, {
            at: './index.rsh:96:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn6 = await (ctc.sendrecv({
            args: [v275, v276, v277, v292, v305, v330, v331, v348, v349, v326, v325],
            evt_cnt: 2,
            funcNum: 8,
            lct: v350,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:104:7:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v356, v357], secs: v359, time: v358, didSend: v116, from: v355 } = txn6;
              
              ;
              const v364 = stdlib.safeAdd(v357, v348);
              const v365 = stdlib.eq(v331, v364);
              const v366 = stdlib.eq(v349, v364);
              const v436 = v366 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
              const v363 = v365 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v436;
              const cv297 = v363;
              const cv298 = v358;
              const cv305 = v305;
              
              await (async () => {
                const v297 = cv297;
                const v298 = cv298;
                const v305 = cv305;
                
                if (await (async () => {
                  const v313 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  
                  return v313;})()) {
                  const v320 = stdlib.safeAdd(v298, v277);
                  sim_r.isHalt = false;
                  }
                else {
                  const v404 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v407 = stdlib.safeMul(v276, stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '2'));
                  const v409 = v404 ? v275 : v292;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v409,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [v356, v357], secs: v359, time: v358, didSend: v116, from: v355 } = txn6;
          ;
          const v360 = stdlib.addressEq(v275, v355);
          stdlib.assert(v360, {
            at: './index.rsh:104:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v361 = stdlib.digest([ctc0, ctc0], [v356, v357]);
          const v362 = stdlib.digestEq(v330, v361);
          stdlib.assert(v362, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:105:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v364 = stdlib.safeAdd(v357, v348);
          const v365 = stdlib.eq(v331, v364);
          const v366 = stdlib.eq(v349, v364);
          const v436 = v366 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
          const v363 = v365 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v436;
          const cv297 = v363;
          const cv298 = v358;
          const cv305 = v305;
          
          v297 = cv297;
          v298 = cv298;
          v305 = cv305;
          
          txn3 = txn6;
          continue;
          
          }
        
        }
      
      }
    const v404 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v407 = stdlib.safeMul(v276, stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '2'));
    const v409 = v404 ? v275 : v292;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v297), {
      at: './index.rsh:117:24:application',
      fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:19:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v276, v277], secs: v279, time: v278, didSend: v57, from: v275 } = txn1;
  ;
  const v288 = stdlib.safeAdd(v278, v277);
  stdlib.protect(ctc1, await interact.acceptWager(v276), {
    at: './index.rsh:70:25:application',
    fs: ['at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:69:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v275, v276, v277, v288],
    evt_cnt: 0,
    funcNum: 1,
    lct: v278,
    onlyIf: true,
    out_tys: [],
    pay: [v276, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v294, time: v293, didSend: v66, from: v292 } = txn2;
      
      const v296 = stdlib.add(v276, v276);
      sim_r.txns.push({
        amt: v276,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v297 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v298 = v293;
      const v305 = v296;
      
      if (await (async () => {
        const v313 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        
        return v313;})()) {
        const v320 = stdlib.safeAdd(v298, v277);
        sim_r.isHalt = false;
        }
      else {
        const v404 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v407 = stdlib.safeMul(v276, stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '2'));
        const v409 = v404 ? v275 : v292;
        sim_r.txns.push({
          kind: 'from',
          to: v409,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v288],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v275, v276, v277, v288],
      evt_cnt: 0,
      funcNum: 2,
      lct: v278,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v422, time: v421, didSend: v227, from: v420 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v275,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v422, time: v421, didSend: v227, from: v420 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:56:29:application',
      fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:73:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v294, time: v293, didSend: v66, from: v292 } = txn2;
    const v296 = stdlib.add(v276, v276);
    ;
    let v297 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    let v298 = v293;
    let v305 = v296;
    
    let txn3 = txn2;
    while (await (async () => {
      const v313 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      
      return v313;})()) {
      const v320 = stdlib.safeAdd(v298, v277);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc0],
        timeoutAt: ['time', v320],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v275, v276, v277, v292, v305, v320],
          evt_cnt: 0,
          funcNum: 5,
          lct: v298,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v388, time: v387, didSend: v178, from: v386 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v292,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v388, time: v387, didSend: v178, from: v386 } = txn5;
        ;
        const v389 = stdlib.addressEq(v275, v386);
        const v390 = stdlib.addressEq(v292, v386);
        const v391 = v389 ? true : v390;
        stdlib.assert(v391, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:87:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:56:29:application',
          fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:87:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v330, v331], secs: v333, time: v332, didSend: v94, from: v329 } = txn4;
        ;
        const v334 = stdlib.addressEq(v275, v329);
        stdlib.assert(v334, {
          at: './index.rsh:86:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v341 = stdlib.safeAdd(v332, v277);
        const v345 = stdlib.protect(ctc0, await interact.getFingers(), {
          at: './index.rsh:93:57:application',
          fs: ['at ./index.rsh:92:11:application call to [unknown function] (defined at: ./index.rsh:92:15:function exp)'],
          msg: 'getFingers',
          who: 'Bob'
          });
        const v346 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:94:53:application',
          fs: ['at ./index.rsh:92:11:application call to [unknown function] (defined at: ./index.rsh:92:15:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v275, v276, v277, v292, v305, v330, v331, v341, v345, v346],
          evt_cnt: 2,
          funcNum: 6,
          lct: v332,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:96:7:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v348, v349], secs: v351, time: v350, didSend: v106, from: v347 } = txn5;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v341],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v275, v276, v277, v292, v305, v330, v331, v341],
            evt_cnt: 0,
            funcNum: 7,
            lct: v332,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v370, time: v369, didSend: v144, from: v368 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v275,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v370, time: v369, didSend: v144, from: v368 } = txn6;
          ;
          const v371 = stdlib.addressEq(v275, v368);
          const v372 = stdlib.addressEq(v292, v368);
          const v373 = v371 ? true : v372;
          stdlib.assert(v373, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:97:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:56:29:application',
            fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:54:28:function exp)', 'at ./index.rsh:97:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v348, v349], secs: v351, time: v350, didSend: v106, from: v347 } = txn5;
          ;
          const v352 = stdlib.addressEq(v292, v347);
          stdlib.assert(v352, {
            at: './index.rsh:96:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v356, v357], secs: v359, time: v358, didSend: v116, from: v355 } = txn6;
          ;
          const v360 = stdlib.addressEq(v275, v355);
          stdlib.assert(v360, {
            at: './index.rsh:104:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v361 = stdlib.digest([ctc0, ctc0], [v356, v357]);
          const v362 = stdlib.digestEq(v330, v361);
          stdlib.assert(v362, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:105:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v364 = stdlib.safeAdd(v357, v348);
          const v365 = stdlib.eq(v331, v364);
          const v366 = stdlib.eq(v349, v364);
          const v436 = v366 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
          const v363 = v365 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : v436;
          const cv297 = v363;
          const cv298 = v358;
          const cv305 = v305;
          
          v297 = cv297;
          v298 = cv298;
          v305 = cv305;
          
          txn3 = txn6;
          continue;
          
          }
        
        }
      
      }
    const v404 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v407 = stdlib.safeMul(v276, stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '2'));
    const v409 = v404 ? v275 : v292;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v297), {
      at: './index.rsh:117:24:application',
      fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:19:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAEIIAIFUAcogAEJeFgwJgMBAAEBACI1ADEYQQRdKmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEFDEAB6UkhBwxAAOZJJAxAAIwkEkQhCjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf9JNQVJIls1/iRbNf2ABDUaKtA0/hZQNP0WULA0/zEAEkQ0A1dYIDT+FjT9FlABEkQ0/TQDIQlbCDX8NP80AyVbNAMhCFs0A1cwICEEIzQDgYgBWzT8Ek0iNAMhC1s0/BJNMgY0AyEGW0IC5EghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEJWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQZbsggjshA0/7IHs0IC8kmBBgxAAKRIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yVbNf4hCFs1/VcwIDX8IQZbNftXWCA1+iELWzX5STUFSSJbNfgkWzX3gARKIcv8NPgWUDT3FlCwMgY0AyEJWwxENPwxABJENP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUDT3FlAoSwFXAH9nKUsBV38RZ0ghCjUBMgY1AkICY0ghBTQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyEMWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQZbsggjshA0/7IHs0IB9kkhBAxAAOBJgQQMQACZSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hCFs1/VcwIDX8IQZbNftJNQVJVwAgNfolWzX5gAQrAcJTNPpQNPkWULAyBjQDIQxbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUChLAVcAf2cpSwFXfwlnSCEHNQEyBjUCQgFrIQQSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyVbsggjshA0A1cAILIHs0IBD0kjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMlWzX/gASai5F0sDIGNAMhDVsMRDT/iAFINANXACA0/zQDIQhbMQAhBDIGNP9JCEIAX0iBoI0GiAEnIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDT/iAD3MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB+Nf81/jX9Nfw1+zX6Nfk0/SEEEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEFNQEyBjUCQgA5sSKyATT6IQQLsggjshA0/DT5NP0iEk2yB7NCAAAxGSEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 144,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v276",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v277",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v276",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v277",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v348",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v349",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v356",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v357",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v348",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v349",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v356",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v357",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001b4338038062001b438339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6117c6806200037d6000396000f3fe60806040526004361061008f5760003560e01c80638328d4c4116100565780638328d4c41461010a5780638e3147691461011d578063ab53f2c614610130578063bf2c5b2414610153578063ebdbfdcc1461016657005b80631e93b0f11461009857806321642639146100bc5780632c10a159146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611356565b610179565b6100966100dd366004611379565b610427565b6100966100f0366004611379565b6105b6565b34801561010157600080fd5b506001546100a9565b610096610118366004611356565b610734565b61009661012b366004611379565b610966565b34801561013c57600080fd5b50610145610b01565b6040516100b392919061138b565b610096610161366004611379565b610b9e565b610096610174366004611356565b610d35565b610189600760005414601c610fd1565b6101a38135158061019c57506001548235145b601d610fd1565b6000808055600280546101b5906113e8565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906113e8565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611471565b90506102598160e001514310601e610fd1565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f338360405161028a92919061151d565b60405180910390a161029e3415601a610fd1565b60608101516102b9906001600160a01b03163314601b610fd1565b61031a60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c080850151908401528481013560e08401528482013561010084015260096000554360015590516103fd9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b6040516020818303038152906040526002908051906020019061042192919061120f565b50505050565b6104376001600054146009610fd1565b6104518135158061044a57506001548235145b600a610fd1565b600080805560028054610463906113e8565b80601f016020809104026020016040519081016040528092919081815260200182805461048f906113e8565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b50505050508060200190518101906104f4919061154e565b905061050781606001514310600b610fd1565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516105389291906115c7565b60405180910390a1610551816020015134146008610fd1565b610559611293565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516002905251439201919091525180016020820151604001526105b181610ff7565b505050565b6105c6600160005414600d610fd1565b6105e0813515806105d957506001548235145b600e610fd1565b6000808055600280546105f2906113e8565b80601f016020809104026020016040519081016040528092919081815260200182805461061e906113e8565b801561066b5780601f106106405761010080835404028352916020019161066b565b820191906000526020600020905b81548152906001019060200180831161064e57829003601f168201915b5050505050806020019051810190610683919061154e565b90506106978160600151431015600f610fd1565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106c89291906115c7565b60405180910390a16106dc3415600c610fd1565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610719573d6000803e3d6000fd5b5060008080556001819055610730906002906112ec565b5050565b6107446009600054146027610fd1565b61075e8135158061075757506001548235145b6028610fd1565b600080805560028054610770906113e8565b80601f016020809104026020016040519081016040528092919081815260200182805461079c906113e8565b80156107e95780601f106107be576101008083540402835291602001916107e9565b820191906000526020600020905b8154815290600101906020018083116107cc57829003601f168201915b50505050508060200190518101906108019190611604565b90506108196040518060200160405280600081525090565b7f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e338460405161084a92919061151d565b60405180910390a161085e34156024610fd1565b8151610876906001600160a01b031633146025610fd1565b604080516108c29161089c91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146026610fd1565b6108d783602001602001358360e0015161115d565b81526108e1611293565b825181516001600160a01b03918216905260208085015183519091015260408085015183519091015260608085015183519216910152815160c08401511461093e57815161010084015114610937576002610941565b6001610941565b60005b6020808301805192909252815143910152608084015190516040015261042181610ff7565b6109766005600054146017610fd1565b6109908135158061098957506001548235145b6018610fd1565b6000808055600280546109a2906113e8565b80601f01602080910402602001604051908101604052809291908181526020018280546109ce906113e8565b8015610a1b5780601f106109f057610100808354040283529160200191610a1b565b820191906000526020600020905b8154815290600101906020018083116109fe57829003601f168201915b5050505050806020019051810190610a33919061168d565b9050610a478160a001514310156019610fd1565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610a789291906115c7565b60405180910390a1610a8c34156015610fd1565b8051610ac0906001600160a01b03163314610ab65760608201516001600160a01b03163314610ab9565b60015b6016610fd1565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610719573d6000803e3d6000fd5b600060606000546002808054610b16906113e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610b42906113e8565b8015610b8f5780601f10610b6457610100808354040283529160200191610b8f565b820191906000526020600020905b815481529060010190602001808311610b7257829003601f168201915b50505050509050915091509091565b610bae6007600054146021610fd1565b610bc881351580610bc157506001548235145b6022610fd1565b600080805560028054610bda906113e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610c06906113e8565b8015610c535780601f10610c2857610100808354040283529160200191610c53565b820191906000526020600020905b815481529060010190602001808311610c3657829003601f168201915b5050505050806020019051810190610c6b9190611471565b9050610c7f8160e001514310156023610fd1565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610cb09291906115c7565b60405180910390a1610cc43415601f610fd1565b8051610cf8906001600160a01b03163314610cee5760608201516001600160a01b03163314610cf1565b60015b6020610fd1565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610719573d6000803e3d6000fd5b610d456005600054146012610fd1565b610d5f81351580610d5857506001548235145b6013610fd1565b600080805560028054610d71906113e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9d906113e8565b8015610dea5780601f10610dbf57610100808354040283529160200191610dea565b820191906000526020600020905b815481529060010190602001808311610dcd57829003601f168201915b5050505050806020019051810190610e02919061168d565b9050610e1a6040518060200160405280600081525090565b610e2b8260a0015143106014610fd1565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610e5c92919061151d565b60405180910390a1610e7034156010610fd1565b8151610e88906001600160a01b031633146011610fd1565b610e9643836040015161115d565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e08401526007600055436001559051610fa69183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610fca92919061120f565b5050505050565b816107305760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152602082015151600214156110fc5761102e82602001516020015183600001516040015161115d565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016103fd565b6020820151511561111257815160600151611116565b8151515b6001600160a01b03166108fc61113584600001516020015160026111b0565b6040518115909202916000818181858888f19350505050158015610719573d6000803e3d6000fd5b60008261116a8382611737565b91508110156111aa5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610fee565b92915050565b60008115806111d4575082826111c6818361174f565b92506111d2908361176e565b145b6111aa5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610fee565b82805461121b906113e8565b90600052602060002090601f01602090048101928261123d5760008555611283565b82601f1061125657805160ff1916838001178555611283565b82800160010185558215611283579182015b82811115611283578251825591602001919060010190611268565b5061128f929150611329565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016112e760405180606001604052806000815260200160008152602001600081525090565b905290565b5080546112f8906113e8565b6000825580601f10611308575050565b601f0160209004906000526020600020908101906113269190611329565b50565b5b8082111561128f576000815560010161132a565b60006060828403121561135057600080fd5b50919050565b60006060828403121561136857600080fd5b611372838361133e565b9392505050565b60006040828403121561135057600080fd5b82815260006020604081840152835180604085015260005b818110156113bf578581018301518582016060015282016113a3565b818111156113d1576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806113fc57607f821691505b6020821081141561135057634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561144f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461146c57600080fd5b919050565b600061010080838503121561148557600080fd5b6040519081019067ffffffffffffffff821181831017156114b657634e487b7160e01b600052604160045260246000fd5b816040526114c384611455565b815260208401516020820152604084015160408201526114e560608501611455565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161137260208301848035825260208082013590830152604090810135910152565b60006080828403121561156057600080fd5b6040516080810181811067ffffffffffffffff8211171561159157634e487b7160e01b600052604160045260246000fd5b60405261159d83611455565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146115f557600080fd5b80604085015250509392505050565b6000610120828403121561161757600080fd5b61161f61141d565b61162883611455565b8152602083015160208201526040830151604082015261164a60608401611455565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c0828403121561169f57600080fd5b60405160c0810181811067ffffffffffffffff821117156116d057634e487b7160e01b600052604160045260246000fd5b6040526116dc83611455565b815260208301516020820152604083015160408201526116fe60608401611455565b60608201526080830151608082015260a083015160a08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561174a5761174a611721565b500190565b600081600019048311821515161561176957611769611721565b500290565b60008261178b57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212208dc722b2ecc6704b0d7fdee15b6fb17abce7cd0a1019aeeb7102079d2c56636564736f6c634300080c0033`,
  BytecodeLen: 6979,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:66:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:73:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:114:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:78:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:87:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:88:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:97:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:98:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
