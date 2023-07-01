export const getCurTimeMixin = {
    data() {
        return {
            timeStr: '',
            timer: null,
        }
    },
    mounted() {
        this.getCurTime()
        this.timer = setInterval(this.getCurTime, 1000)
    },
    methods: {
        getCurTime() {
            const getZero = (t) => {
                return t < 10 ? '0' + t : t;
            }
            const arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            const date = new Date();
            const year = date.getFullYear();
            const month = getZero(date.getMonth() + 1);
            const dates = getZero(date.getDate());
            const day = date.getDay();
            const h = getZero(date.getHours());
            const m = getZero(date.getMinutes());
            const s = getZero(date.getSeconds());
            this.timeStr = `${year} 年 ${month} 月 ${dates} 日 ${arr[day]} ${h}：${m}：${s}`
        }
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
}
