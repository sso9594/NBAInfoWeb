tabName = "LEAGUE_STANDINGS";

// function showTab(tabName, element) {     
//     // 모든 탭 숨기기
//     var tabs = document.getElementsByClassName('tab');
//     for (var i = 0; i < tabs.length; i++) {
//         tabs[i].style.display = 'none';
//     }

//     // 선택한 탭 보이기
//     var selectedTab = document.getElementById(tabName);
//     selectedTab.style.display = 'block';

//     var buttons = document.getElementsByClassName('subnav');
//     for (var i = 0; i < buttons.length; i++) {
//     buttons[i].classList.remove('selected');
//     }

//     // 선택한 버튼에 스타일 적용
//     element.classList.add('selected');
// }

window.onload = function() {
    var defaultTab = document.getElementById('defaultTab'); 
    var defaultButton = document.getElementById('defaultButton');
    showTab('LEAGUE_STANDINGS',defaultTab);
    showTable('Eastern',defaultButton);
};

var cssClassNames = {
    tableRow: 'wholeRow',
    headerRow: 'firstRow'
};

var charCSS = {
    tableRow: 'chartcss'
};

google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'POSITION');
    data.addColumn('string', 'TEAM');
    data.addColumn('number', 'W');
    data.addColumn('number', 'L');
    data.addColumn('number', 'WIN%');
    data.addColumn('number', 'GB');
    data.addColumn('string', 'CONF');
    data.addColumn('string', 'DIV');
    data.addColumn('string', 'HOME');
    data.addColumn('string', 'ROAD');
    data.addColumn('string', 'OT');
    data.addColumn('string', 'LAST10');
    data.addColumn('number', 'STREAK');
    data.addRows([
        [1,'Milwaukee Bucks', 58, 24, 0.707, 0, '35-17', '11-5', '32-9', '26-15', '3-2', '6-4', {v:-2,   f: '2L'}],
        [2,'Boston Celtics',  57, 25, 0.695, 1, '34-18', '11-5', '32-9', '25-16', '4-7', '8-2', {v:-3,   f: '3L'}],
        [3,'Philadelphia 76ers',  54, 28, 0.659, 4, '34-18', '10-6', '29-12', '25-16', '4-2', '5-5', {v:2,   f: '2W'}],
        [4,'Cleveland Cavaliers',  51, 31, 0.622, 7, '34-18', '13-3', '31-10', '20-21', '7-0', '7-3', {v:-1,   f: '1L'}],
        [5, 'NEW YORK KNICKS', 47, 35, 0.573, 11, '32-20', '8-8', '23-18', '24-17', '4-6', '5-5', {v:-2,   f: '2L'}],
        [6,'Brooklyn Nets',	45, 37,	0.549, 13, '30-22', '7-9', '23-18',	'22-19'	, '1-1', '6-4', {v:-1,   f: '1L'}],
        [7, 'Atlanta Hawks', 41, 41, 0.500,	17,	'26-26', '8-8', '24-17', '17-24', '4-2', '5-5', {v:-2,   f: '2L'}],
        [8, 'Miami Heat', 44, 38, 0.537, 14, '24-28', '10-6', '27-14', '17-24', '3-2', '6-4', {v:1,   f: '1W'}],
        [9, 'Toronto Raptors', 41, 41, 0.500, 17, '26-26', '4-12', '27-14', '14-27',	'2-3', '6-4', {v:1,   f: '1W'}],
        [10, 'Chicago Bull', 40, 42, 0.488,	18,	'27-25', '7-9', '22-19', '18-23', '3-4', '6-4',	{v:2,   f: '2W'}],
        [11, 'Indiana Pacers', 35, 47, 0.427, 23, '24-28', '7-9', '20-21', '15-26', '1-2', '3-7', {v:1,   f: '1W'}],
        [12, 'Washington Wizards', 35, 47, 0.427, 23, '21-31', '8-8', '19-22', '16-25', '1-2', '3-7', {v:-1,   f: '1L'}],
        [13, 'Orlando Magic', 34, 48, 0.415, 24, '20-32', '7-9', '20-21', '14-27', '2-2', '5-5', {v:-4,   f: '4L'}],
        [14, 'Charlotte Hornets', 27, 55, 0.329, 31, '15-37', '7-9', '13-28', '14-27', '1-4', '5-5', {v:1,   f: '1W'}],
        [15, 'Detroit Pistons', 17, 65, 0.207, 41, '8-44', '2-14', '9-32', '8-33', '3-1', '1-9', {v:-1,   f: '1L'}]
    ]);
    var table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(data, {showRowNumber: false, width: '100%', height: '100%',cssClassNames: cssClassNames,alternatingRowStyle: false});
}

function showTable(tableName, element) {     
    
    var tabs = document.getElementsByClassName('TB');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    var selectedTab = document.getElementById(tableName);
    selectedTab.style.display = 'block';

    var buttons = document.getElementsByClassName('Tbutton');
    for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('selected');
    }

    // 선택한 버튼에 스타일 적용
    element.classList.add('selected');
}

google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable2);

function drawTable2() {
    var data2 = new google.visualization.DataTable();
    data2.addColumn('number', 'POSITION');
    data2.addColumn('string', 'TEAM');
    data2.addColumn('number', 'W');
    data2.addColumn('number', 'L');
    data2.addColumn('number', 'WIN%');
    data2.addColumn('number', 'GB');
    data2.addColumn('string', 'CONF');
    data2.addColumn('string', 'DIV');
    data2.addColumn('string', 'HOME');
    data2.addColumn('string', 'ROAD');
    data2.addColumn('string', 'OT');
    data2.addColumn('string', 'LAST10');
    data2.addColumn('number', 'STREAK');
    data2.addRows([
        [1, 'Denver Nuggets', 53, 29, 0.646, 0, '34-18', '10-6', '34-7', '19-22', '3-0', '5-5', {v:1,   f: '1W'}],
        [2, 'Memphis Grizzlies', 51, 31, 0.622, 2, '30-22', '13-3', '35-6', '16-25', '3-1', '6-4', {v:-1,   f: '1L'}],
        [3, 'Sacramento Kings',	48, 34, 0.585, 5, '32-20', '9-7', '23-18', '25-16', '4-1', '5-5', {v:-3,   f: '3L'}],
        [4, 'Phoenix Suns', 45, 37, 0.549, 8, '30-22', '9-7', '28-13', '17-24', '1-3', '7-3', {v:-2,   f: '2L'}],
        [5, 'LA Clippers', 44, 38, 0.537, 9, '27-25', '9-7', '23-18', '21-20', '2-3', '6-4', {v:3,   f: '3W'}],
        [6, 'Golden State Warriors', 44, 38, 0.537, 9, '30-22', '7-9', '33-8', '11-30', '2-3', '8-2', {v:3,   f: '3W'}],
        [7, 'Los Angeles Lakers', 43, 39, 0.524, 10, '27-25', '6-10', '23-18', '20-21', '3-4', '8-2', {v:2,   f: '2W'}],
        [8, 'Minnesota Timberwolves', 42, 40, 0.512, 11, '29-23', '8-8', '22-19', '20-21', '1-4', '7-3', {v:3,   f: '3W'}],
        [9, 'New Orleans Pelicans', 42, 40, 0.512, 11, '29-23', '11-5', '27-14', '15-26', '3-4', '7-3', {v:-1,   f: '1L'}],
        [10, 'Oklahoma City Thunder', 40, 42, 0.488, 13, '25-27', '9-7', '24-17', '16-25', '2-4', '4-6', {v:2,   f: '2W'}],
        [11, 'Dallas Mavericks', 38, 44, 0.463, 15, '28-24', '9-7', '23-18', '15-26', '4-5', '2-8', {v:-2,   f: '2L'}],
        [12, 'Utah Jazz', 37, 45, 0.451, 16, '24-28', '6-10', '23-18', '14-27', '4-1', '2-8', {v:-1,   f: '1L'}],
        [13, 'Portland Trail Blazers', 33, 49, 0.402, 20, '23-29', '7-9', '17-24', '16-25', '2-0', '1-9', {v:4,   f: '4W'}],
        [14, 'Houston Rockets', 22, 60, 0.268, 31, '12-40', '4-12', '14-27', '8-33', '1-1', '4-6', {v:3,   f: '3W'}],
        [15, 'San Antonio Spurs', 22, 60, 0.268, 31, '10-42', '3-13', '14-27', '8-33', '1-5', '3-7', {v:1,   f: '1W'}]
    ]);
    var table2 = new google.visualization.Table(document.getElementById('table_div2'));
    table2.draw(data2, {showRowNumber: false, width: '100%', height: '100%',cssClassNames: cssClassNames,alternatingRowStyle: false});
}

$(document).ready(function() {
    var tabName = "PLAYER_RANKING";
    function showTab(tabName, element) {
        $('.tab').fadeOut(300);
        $('#' + tabName).fadeIn(300);
        $('.subnav').removeClass('selected');
        $(element).addClass('selected');
    }
    $('.subnav').click(function() {
        var selectedTabName = $(this).attr('onclick').match(/showTab\('(.+?)'/)[1];
        showTab(selectedTabName, this);
    });
    showTab(tabName, $('#' + tabName));
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['연도', 'DEVIN BOOKER', 'ANTHONY EDWARDS','STEPHEN CURRY','NIKOLA JOKIC','TRAE YOUNG'],
      ['2020-21',  27.3, 19.3, 28.2, 29.8, 25.3],
      ['2021-22',  23.3, 21.3, 27.4, 31.0, 28.4],
      ['2022-23',  33.7, 24.6,	30.5, 29.9, 26.2]
    ]);

    var data_2 = google.visualization.arrayToDataTable([
      ['연도', 'Anthony Davis', 'Nikola Jokic','Kevon Looney','Rudy Gobert','Domantas Sabonis'],
      ['2020-21',  7.9, 11.6, 4.5, 13.5, 4.6],
      ['2021-22',  9.9, 13.2, 7.6, 14.7, 7.3],
      ['2022-23',  12.5, 13.3,	13.1, 11.6, 11.0]
    ]);

    var data_3 = google.visualization.arrayToDataTable([
        ['연도', 'Nikola Jokic', 'Trae Young','James Harden','Jrue Holiday','De.Aaron Fox'],
        ['2020-21',  5.0, 9.4, 8.6, 8.7, 0.0],
        ['2021-22',  5.8, 9.7, 8.6, 6.5, 0.0],
        ['2022-23',  10.3, 10.2, 8.3, 8.0, 7.7]
    ]);
    var data_4 = google.visualization.arrayToDataTable([
        ['연도', 'Anthony Davis', 'Joel Embiid','Anthony Edwards','Jaren Jackson Jr.','Brook Lopez'],
        ['2020-21',  1.6, 1.5, 0.5, 1.2, 1.5],
        ['2021-22',  2.3, 0.8, 0.6, 2.5, 1.5],
        ['2022-23',  2.0, 2.8, 0.7, 2.0, 1.8]
    ]);
    var data_5 = google.visualization.arrayToDataTable([
        ['연도', 'De.Aaron Fox', 'Jimmy Butler','Donovan Mitchell','Dejounte Murray','James Harden'],
        ['2020-21',  0.0, 2.1, 1.1, 1.5, 1.7],
        ['2021-22',  0.0, 1.6, 0.7, 2.0, 0.8],
        ['2022-23',  2.1, 1.8, 2.0, 1.5, 1.8]
    ]);
    var data_6 = google.visualization.arrayToDataTable([
        ['연도', 'Nic Claxton', 'Rudy Gobert','Jarrett Allen','Clint Capela','Devin Booker'],
        ['2020-21',  48.3, 67.5, 59.4, 59.4, 44.7],
        ['2021-22',  79.2, 71.3, 58.3, 61.3, 45.1],
        ['2022-23',  72.0, 65.9, 61.1, 65.3, 58.5]
    ]);
    var data_7 = google.visualization.arrayToDataTable([
        ['연도', 'Stephen Curry', 'Jayson Tatum','Klay Thompson','Derrick White','Jamal Murray'],
        ['2020-21',  4.2, 2.8, 3.3, 0.7, 2.0],
        ['2021-22',  4.1, 3.2, 3.5, 1.1, 3.3],
        ['2022-23',  4.4, 2.7, 3.8, 2.5, 3.1]
    ]);
    var data_8 = google.visualization.arrayToDataTable([
        ['연도', 'Kawhi Leonard', 'Moses Moody','Devin Booker','Joe Ingles','Luke Kennard'],
        ['2020-21',  32.9, 0.0, 32.1, 35.0, 60.0],
        ['2021-22',  39.3, 53.8, 43.1, 41.4, 41.2],
        ['2022-23',  60.0, 59.1, 50.8, 50.0, 50.0]
    ]);
    var data_9 = google.visualization.arrayToDataTable([
        ['연도', 'Nikola Jokic', 'Anthony Edwards','Devin Booker','Anthony Davis','Trae Young'],
        ['2020-21',  53.3, 41.9, 40.2, 42.6, 43.1],
        ['2021-22',  58.5, 36.4	, 35.2, 47.9, 46.5],
        ['2022-23',  63.7, 41.9, 55.0, 52.0, 44.6]
    ]);
   
    

    var options = {
        title: 'POINTS PER GAME',
        curveType: 'function',
        chartArea: {width: '90%', height: '90%'},
        legend: {position: 'bottom'},
        titlePosition: 'in', axisTitlesPosition: 'in',
        hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'},
        width : '100%',
        height : 600
    };
    var options_2 = {
        title: 'REBOUNDS PER GAME',
        curveType: 'function',
        chartArea: {width: '90%', height: '90%'},
        legend: {position: 'bottom'},
        titlePosition: 'in', axisTitlesPosition: 'in',
        hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'},
        width : '100%',
        height : 600
    };
    var options_3 = {
        title: 'ASSISTS PER GAME',
        curveType: 'function',
        chartArea: {width: '90%', height: '90%'},
        legend: {position: 'bottom'},
        titlePosition: 'in', axisTitlesPosition: 'in',
        hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'},
        width : '100%',
        height : 600
    };
    var options_4 = {
        title: 'BLOCKS PER GAME',
        curveType: 'function',
        chartArea: {width: '90%', height: '90%'},
        legend: {position: 'bottom'},
        titlePosition: 'in', axisTitlesPosition: 'in',
        hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'},
        width : '100%',
        height : 600
    };
    var options_5 = {
        title: 'STEALS PER GAME',
        curveType: 'function',
        chartArea: {width: '90%', height: '90%'},
        legend: {position: 'bottom'},
        titlePosition: 'in', axisTitlesPosition: 'in',
        hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'},
        width : '100%',
        height : 600
    };
    var options_6 = {
        title: 'FIELD GOAL PERCENTAGE',
        curveType: 'function',
        chartArea: {width: '90%', height: '90%'},
        legend: {position: 'bottom'},
        titlePosition: 'in', axisTitlesPosition: 'in',
        hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'},
        width : '100%',
        height : 600
    };
    var options_7 = {
        title: 'THREE POINTERS MADE',
        curveType: 'function',
        chartArea: {width: '90%', height: '90%'},
        legend: {position: 'bottom'},
        titlePosition: 'in', axisTitlesPosition: 'in',
        hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'},
        width : '100%',
        height : 600
    };
    var options_8 = {
        title: 'THREE POINT PERCENTAGE',
        curveType: 'function',
        chartArea: {width: '90%', height: '90%'},
        legend: {position: 'bottom'},
        titlePosition: 'in', axisTitlesPosition: 'in',
        hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'},
        width : '100%',
        height : 600
    };
    var options_9 = {
        title: 'FANTASY POINTS PER GAME',
        curveType: 'function',
        chartArea: {width: '90%', height: '90%'},
        legend: {position: 'bottom'},
        titlePosition: 'in', axisTitlesPosition: 'in',
        hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'},
        width : '100%',
        height : 600
    };
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart_1'));
    var chart_2 = new google.visualization.LineChart(document.getElementById('curve_chart_2'));
    var chart_3 = new google.visualization.LineChart(document.getElementById('curve_chart_3'));
    var chart_4 = new google.visualization.LineChart(document.getElementById('curve_chart_4'));
    var chart_5 = new google.visualization.LineChart(document.getElementById('curve_chart_5'));
    var chart_6 = new google.visualization.LineChart(document.getElementById('curve_chart_6'));
    var chart_7 = new google.visualization.LineChart(document.getElementById('curve_chart_7'));
    var chart_8 = new google.visualization.LineChart(document.getElementById('curve_chart_8'));
    var chart_9 = new google.visualization.LineChart(document.getElementById('curve_chart_9'));
    chart.draw(data, options);
    chart_2.draw(data_2,options_2);
    chart_3.draw(data_3,options_3);
    chart_4.draw(data_4,options_4);
    chart_5.draw(data_5,options_5);
    chart_6.draw(data_6,options_6);
    chart_7.draw(data_7,options_7);
    chart_8.draw(data_8,options_8);
    chart_9.draw(data_9,options_9);

}

function showChart(chartNumber) {
    var chartContainers = document.getElementsByClassName("chart-container");
    for (var i = 0; i < chartContainers.length; i++) {
        if (i + 1 === chartNumber) {
            chartContainers[i].style.display = "inline-block";
        } else {
            chartContainers[i].style.display = "none";
        }
    }
}

$(document).ready(function() {
    $(".scrollBtn").click(function() {
        var targetDiv = "#" + $(this).data("target");
        $('html, body').animate({
            scrollTop: $(targetDiv).offset().top
        }, 1000); 
    });
});