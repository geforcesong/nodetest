const rules =[{"enabled":true,"activityType":"ConfirmedAvailabilityMins","activityDescription":"Duration in minutes;  Indicates time duration within the operating hours when the employee is available for the day used for shift assignment purposes, as configured by the employee","activityDisplayName":"Confirmed Available minutes","activityDataType":"double","activityUnit":"Mins","activityGroup":"WORKPREFERENCES","rules":[{"min":1,"max":60,"pointType":"REWARDS","points":4.3},{"min":61,"max":71,"pointType":"REWARDS","points":7.5},{"min":72,"max":1000000000,"pointType":"REWARDS","points":10.1}]},{"enabled":true,"activityType":"EarlyClockInMins","activityDescription":"Duration in minutes; Indicates the amount of time by which the employee was early to the scheduled shift on this day","activityDisplayName":"Early Clock In minutes","activityDataType":"double","activityUnit":"Mins","activityGroup":"ATTENDANCE","rules":[{"min":0,"max":0,"pointType":"REWARDS","points":10},{"min":1,"max":1000000000,"pointType":"REWARDS","points":20}]},{"enabled":true,"activityType":"EarlyClockOutMins","activityDescription":"Duration in minutes; Indicates the amount of time by which the employee clocked out earlier than  the scheduled end of shift","activityDisplayName":"Early Clock Out minutes","activityDataType":"double","activityUnit":"Mins","activityGroup":"ATTENDANCE","rules":[{"min":0,"max":0,"pointType":"INFRACTION","points":10},{"min":1,"max":1000000000,"pointType":"INFRACTION","points":15}]},{"enabled":true,"activityType":"LateClockInMins","activityDescription":"Duration in minutes; Indicates the amount of time by which the employee clocked in later than  the scheduled start of shift","activityDisplayName":"Late Clock In minutes","activityDataType":"double","activityUnit":"Mins","activityGroup":"ATTENDANCE","rules":[{"min":10,"max":30,"pointType":"INFRACTION","points":30},{"min":31,"max":1000000000,"pointType":"INFRACTION","points":50}]},{"enabled":true,"activityType":"LateClockOutMins","activityDescription":"Duration in minutes; Indicates the amount of time by which the employee clocked out later than  the scheduled end of shift","activityDisplayName":"Late Clock Out minutes","activityDataType":"double","activityUnit":"Mins","activityGroup":"ATTENDANCE","rules":[{"min":10,"max":30,"pointType":"REWARDS","points":20},{"min":31,"max":60,"pointType":"INFRACTION","points":30},{"min":61,"max":1000000000,"pointType":"INFRACTION","points":50}]},{"enabled":true,"activityType":"NumLocationsSubscribedForOffer","activityDescription":"Number of locations in the vicinity of the employee's home location where the employee has opted to work","activityDisplayName":"Num Locations Subscribed For Offers","activityDataType":"int","activityUnit":"Count","activityGroup":"WORKPREFERENCES","rules":[{"min":1,"max":5,"pointType":"REWARDS","points":5}]},{"enabled":true,"activityType":"NumNoShows","activityDescription":"Number of shifts where the employee was absent.","activityDisplayName":"Number of No Show","activityDataType":"int","activityUnit":"Count","activityGroup":"ATTENDANCE","rules":[{"min":1,"max":2,"pointType":"INFRACTION","points":2}]},{"enabled":true,"activityType":"NumOpenShiftOfferClaimed","activityDescription":"Number of open shift offers that the employee accepted for the day","activityDisplayName":"Num Open Shift Offers Accepted","activityDataType":"int","activityUnit":"Count","activityGroup":"SCHEDULING","rules":[{"min":1,"max":1,"pointType":"REWARDS","points":10},{"min":2,"max":10,"pointType":"REWARDS","points":12},{"min":11,"max":20,"pointType":"REWARDS","points":20},{"min":21,"max":1000000000,"pointType":"INFRACTION","points":20}]},{"enabled":true,"activityType":"NumSwapShiftOfferClaimed","activityDescription":"Number of swap shift offers that the employee accepted for the day","activityDisplayName":"Num Swap Shift Offers Accepted","activityDataType":"int","activityUnit":"Count","activityGroup":"SCHEDULING","rules":[{"min":0,"max":1,"pointType":"REWARDS","points":0}]}];
const grouped = {

}

for(let rule of rules){
    if(!grouped[rule.activityGroup]){
        grouped[rule.activityGroup] = [];
    }
    grouped[rule.activityGroup].push(rule);
}

const ret = Object.keys(grouped).map(group=>{
    return {
        id: group,
        title: 'empty',
        content: grouped[group].map(a=>a.activityType)
    }
})



// console.log(ret);
const test  = Object.entries(rules);
console.log(object);