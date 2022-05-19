import schedule from 'node-schedule'
import params from './params'
var ctrl = {
    'mailTask': () => {
        if (params.mailTask.status){
            var task = schedule.scheduleJob(params.mailTask.frequency, async () => {
                console.log('Debe repetirse cada 3 min')
            })
        }
    }
}

export default ctrl;