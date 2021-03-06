
/*
 * GET home page.
 */

var dbConn = require('../model/dbConnection');

exports.index = function(req, res){
  res.render('index');
};

exports.showRatingAnalysis = function(req, res){
		  res.render('ratingAnalysis');
	
};
exports.getBarChartCali = function(req, res){
	  res.render('companyBarChart');

};
exports.getBarChartTexas = function(req, res){
	  res.render('BarChartTexas');

};
exports.getBarChartNewYork = function(req, res){
	  res.render('BarChartNY');

};
exports.getBarChartWashington = function(req, res){
	  res.render('BarChartWashington');

};
exports.getBarChartVirginia = function(req, res){
	  res.render('BarChartVirginia');

};


exports.showSalaryAnalysis= function(req, res){
	  res.render('salaryAnalysis');

};

exports.showMap= function(req, res){
	res.render('Map',{rows:''});

};

exports.showhome= function(req, res){
	res.render('index');
	};


exports.getCompanyRatings = function(req, res){
	dbConn.getCompanyRatings(function(err,rows){
		console.log(rows);
		 res.send(rows);
	});	
	  
};

exports.getSalaryInfo= function(req, res){
	dbConn.getSalaryInfo(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUser);	
};


exports.getMapData= function(req, res){
	console.log("routes");
	dbConn.getMapData(function(err,rows){
		 res.send(rows);
	});	
};




exports.getCompanyReviews = function(req,res){
	dbConn.getCompanyReviews(function(err,rows){
		console.log(rows);
		res.send(rows);
	})
};

exports.showCompanyReviews = function(req,res){
	res.render('companyReviews');
};

exports.showBubble= function(req, res){
	var stateName = req.params.stateName;
	//console.log("__________"+stateName+"param="+req.params.companyName);
	var companyName = req.params.companyName;
	console.log("__________"+stateName+"_______"+companyName);
	res.render('bubbleChart',{stateName:stateName,companyName:companyName});
	};

exports.getJobcountData = function(req,res){
	var stateName = req.params.stateName;
	console.log("__________***************_____________"+stateName);
	dbConn.getJobCountByState(function(err,rows){
		console.log(rows);
		res.send(rows);
	},stateName);
}

exports.showTreeMap = function(req,res){
	console.log("State Name_________"+req.params.stateName);
	res.render('companyTreeMap',{dat:req.params.stateName});
}
exports.getBubble= function(req, res){
	console.log("side getBubble");
	var stateName = req.params.stateName;
	var companyName = req.params.companyName;
	dbConn.getBubble(function(err,rows){
		console.log("Inside getBubble");
		console.log(rows);
				 res.send(rows);
	},stateName,companyName);	
};

