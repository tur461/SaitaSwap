import log from "./logger";
import toast from "./toast";
// l_t => l => log, t => toast => so both log as well as toast
// m => msg
// i => info
// e => error
// s => success
// w => warning
const l_t = {
    i: m => { log.i(m); toast.s(m); },
    e: m => { log.e(m); toast.e(m); },
    s: m => { log.i(m); toast.s(m); },
    w: m => { log.w(m); toast.e(m); },
}

export default l_t;