import { defineStore } from 'pinia';

const useCountStore = defineStore({
    id: 'count',
    state: () => ({ num: 1 }),
    actions: {
        increment() {
            this.num += 1
        }
    }
})

// store
const instance = useCountStore()
instance.$subscribe((_, state) => {
    localStorage.setItem('count-state', JSON.stringify({ ...state }))
})
// get 当数据发生改变时，刷新页面数据清空， application 中数据也会清空，加这个刷新则不会清空 刷新页面状态不丢失
const old=localStorage.getItem('count-state')
if (old) {
    instance.$state = JSON.parse(old)
}
export default useCountStore