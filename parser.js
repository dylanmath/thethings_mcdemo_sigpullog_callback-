function main(params, callback){
  //console.log('Sigfox device id' + params.deviceId)
  
  var result = [
        {
            "key": "device",
            "value": params.device
        },
        {
            "key": "data",
            "value": params.data.substring(0,24)
        },
        {
            "key": "time",
            "value": params.time
        },
        {
            "key": "snr",
            "value": params.snr
        },
        {
            "key": "station",
            "value": params.station
        },
        {
            "key": "avgSnr",
            "value": params.avgSnr
        },
        {
            "key": "lat",
            "value": parseFloat(params.lat)
        },
        {
            "key": "lng",
            "value": parseFloat(params.lng)
        },     
        {
            "key": "rssi",
            "value": params.rssi
        },   
        {
            "key": "seqNumber",
            "value": params.seqNumber
        },
    	{
            "key": "temperature",
            "value": parseInt('0x'+params.data.substring(0,2))
        },
        {
            "key": "FullMessage",
            "value": params.data.substring(0,24)
        }
    ]
    callback(null, result) 
}
