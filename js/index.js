
 
$(document).ready(function() {
  var dataSet = [];
    $.get('https://sheets.googleapis.com/v4/spreadsheets/17i4L2pirULndV0KrsFewUtrevyLnTGGVM0aHU3c9wBI/values/Qualifier Scores!A2:H151?key=AIzaSyBhiqVypmyLHYPmqZYtvdSvxEopcLZBdYU', function(data) {
      var element = data.values;
      for (i = 0; i < element.length; i++) {
        dataSet.push([element[i][0], element[i][1], element[i][7]])
        
        
      }
      
      $('#m_table_1').DataTable( {
        "fnDrawCallback": function ( oSettings ) {
          /* Need to redo the counters if filtered or sorted */
          if ( oSettings.bSorted || oSettings.bFiltered )
          {
              for ( var i=0, iLen=oSettings.aiDisplay.length ; i<iLen ; i++ )
              {
                  $('td:eq(0)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr ).html( i+1 );
              }
          }
      },
      "aoColumnDefs": [
          { "bSortable": false, "aTargets": [ 0, 1 ] }
      ],
      "aaSorting": [[ 2, 'desc' ]],
        info: false,
        paging: false,
        searching: false,
        ordering: true,
        data: dataSet,
        columns: [
            { title: "Rank" },
            { title: "Team Name" },
            { title: "Points" }
        ]
    } );
    })  
    
  
    
} );