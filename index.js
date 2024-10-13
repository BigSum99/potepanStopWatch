$(function(){

    //タイマーを更新するための定義
    let timer;
    let elapsedTime = 0;
    let isRunning = false;

    function updateDisplay() {
        const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsedTime / 1000) % 60);
        const tenths = Math.floor((elapsedTime % 1000) / 100);

        const displayTime = ` ${hours}:${minutes}:${seconds}:${tenths}`;
        $('#time').text(displayTime);

    } 


    //スタートボタンを押した時の動作
    $('#start').click(function() {
        if(!isRunning) {
            isRunning = true;
            $('#start').prop('disabled',true);
            $('#stop').prop('disabled',false);
            $('#reset').prop('disabled',true);

            timer = setInterval(function() {
                elapsedTime += 10;
                updateDisplay();
            },10);
        }
    });

    //ストップボタンを押したとき
    $('#stop').click(function() {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
            $('#start').prop('disabled',false);
            $('#stop').prop('disabled',true);
            $('#reset').prop('disabled',false);
        }
    });

    //リセットボタンを押したとき
    $('#reset').click(function() {
        clearInterval(timer);
        isRunning = false;
        elapsedTime = 0;
        $('#start').prop('disabled',false);
        $('#stop').prop('disabled',true);
        $('#reset').prop('disabled',true);
        updateDisplay();
    });
});