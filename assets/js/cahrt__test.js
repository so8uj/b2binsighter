
let chart; 
function CreatePicChart(target_id){

    var data_values = [];
    var data_bgs = [];
    var data_labels = [];
    const ctx = $('#'+target_id);

    $('.'+target_id+' li').each(function(){
        data_values.push($(this).data('chart-value'));
        data_bgs.push($(this).data('chart-bg'));
        data_labels.push($(this).data('chart-labels'));
    });
    const data = {
        labels: data_labels,
        datasets: [{
          label: 'My First Dataset',
          data: data_values,
          backgroundColor: data_bgs,
          hoverOffset: 4
        }]
    };
    const configuration = {
        type: 'doughnut',
        data: data,
        options:{
            cutout: "70%",
            plugins:{
                legend:{
                    display: false
                }
            }
        }
    }

    if (chart) {
        chart.destroy();
        chart = new Chart(ctx, configuration);
    } else {
        chart = new Chart(ctx, configuration);
    }
}


