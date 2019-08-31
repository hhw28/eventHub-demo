class EventHub{
  private cache:{[key:string]: Array<(data:unknown)=>void>} = {}
  on(eventName:string, fn:(data:unknown)=>void){
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }
  emit(eventName: string, data?:unknown){
    (this.cache[eventName] || []).forEach(fn => fn(data))
  }
  off(eventName: string, fn: (data:unknown)=>void){
    this.cache[eventName] = this.cache[eventName] || []
    const index = this.cache[eventName].indexOf(fn)
    if(index === -1) return
    this.cache[eventName].splice(index, 1)
  }
}
export default EventHub