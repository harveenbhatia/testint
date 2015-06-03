steal(
    'can',

    function(can) {

        // YOUR CODE HERE
       var contactListViewModel =  {
		   inputData :{name: "", email: "", phone: ""},
		   tableData : new can.List(),
		   onAdd: function(){
			   this.tableData.push(
			   {
				   name: this.inputData.name,
				   email: this.inputData.email,
				   phone: this.inputData.phone
			   }
			   );
			
			this.inputData.attr("name","");
			this.inputData.attr("email","");
			this.inputData.attr("phone","");
		   }		
		   
	   };
       return can.Component.extend({
           tag: 'intro-app',
		   viewModel: contactListViewModel
       });
        
        
        /////////////////////////
    }
);
