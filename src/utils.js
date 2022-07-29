import { ADDRESS } from "./constant";

// export const getDeadline = sec => Math.ceil(Date.now()/1000) + sec;
export const getDeadline = sec => 1659077341 + sec;

export function isAddr(addr) {
    if(
        addr &&
        addr.length && 
        addr.length == 42 && 
        addr.substring(0,2) === '0x' && 
        addr !== ADDRESS.ZERO
    ) return !0;
    return !1;
}

export function formatUp(v, dec) {
    return (v * 10**(dec || 18)).toLocaleString('fullwide', { useGrouping: !1 });
}

export function formatDown(v, dec) {
    return (v / 10**(dec || 18)).toFixed(4);
}