function calculation() {

    var work_time = $('select[name="work_time"]').val();
    var work_date = $('input[name="work_date"]').val();
    var work_time_min = $('select[name="work_time_min"]').val();
    console.log("work_time_min" + work_time_min);
    console.log("work_time" + work_time);
    console.log("work_date" + work_date);

    var calculation_result = work_time * work_date;
    console.log("calculation_result" + calculation_result);
    var ExtraTime = calculation_result - work_time_min;
    console.log("ExtraTime" + ExtraTime);
    console.log(Math.floor(ExtraTime/work_time)); 
    var holidays = Math.floor(ExtraTime/work_time);
    
    if (Math.sign(holidays) !== 1) {
        holidays = 0;
    }
    
    //var conversion_work_time = parseInt(work_time);

    $('textarea').text("月の合計稼働時間は" + calculation_result + "時間です。有給取得可能日数は" +  holidays + "日です。");
}
