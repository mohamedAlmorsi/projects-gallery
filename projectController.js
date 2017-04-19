let Project = require('../databases/collections/db.js');

let projectController = {
    
    getAllProjects:function(req, res){
        
        Project.find(function(err, item){
            
            if(err)
                res.send(err.message);
            else
                res.render('main', {item});
        })
    }
/*
    createProject:function(req, res){
        let project = new Project(req.body);

        project.save(function(err, project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(project);
                res.redirect('/');
            }
        })
    }
}*/

//module.exports = projectController;