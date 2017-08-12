var social_roles_p_one = function() { 
d3.csv("data/social_roles_p1_copy.csv")
    .row(function(d) { return {session: String(d.Session), expert: Number(d.Expert), novice: Number(d.Novice), engineer:Number(d.Engineer),student:Number(d.Student), teacher:Number(d.Teacher)};})
    .get(function(error, data){ 
chart(data);})}

var social_roles_p_two = function() { 
d3.csv("data/social_roles_p2_copy.csv")
    .row(function(d) { return {session: String(d.Session), expert: Number(d.Expert), novice: Number(d.Novice), engineer:Number(d.Engineer),student:Number(d.Student), teacher:Number(d.Teacher)};})
    .get(function(error, data){ 
chart(data);})}
var social_roles_p_three = function() { 
d3.csv("data/social_roles_p3_copy.csv")
    .row(function(d) { return {session: String(d.Session), expert: Number(d.Expert), novice: Number(d.Novice), engineer:Number(d.Engineer),student:Number(d.Student), teacher:Number(d.Teacher)};})
    .get(function(error, data){ 
chart(data);})}

var social_roles_p_four = function() { 
d3.csv("data/social_roles_p4_copy.csv")
    .row(function(d) { return {session: String(d.Session), expert: Number(d.Expert), novice: Number(d.Novice), engineer:Number(d.Engineer),student:Number(d.Student), teacher:Number(d.Teacher)};})
    .get(function(error, data){ 
chart(data);})}

var social_roles_p_five = function() { 
d3.csv("data/social_roles_p5_copy.csv")
    .row(function(d) { return {session: String(d.Session), expert: Number(d.Expert), novice: Number(d.Novice), engineer:Number(d.Engineer),student:Number(d.Student), teacher:Number(d.Teacher)};})
    .get(function(error, data){ 
chart(data);})}

var social_roles_p_six = function() { 
d3.csv("data/social_roles_p6_copy.csv")
    .row(function(d) { return {session: String(d.Session), expert: Number(d.Expert), novice: Number(d.Novice), engineer:Number(d.Engineer),student:Number(d.Student), teacher:Number(d.Teacher)};})
    .get(function(error, data){ 
chart(data);})}

var social_roles_p_ten = function() { 
d3.csv("data/social_roles_p10_copy.csv")
    .row(function(d) { return {session: String(d.Session), expert: Number(d.Expert), novice: Number(d.Novice), engineer:Number(d.Engineer),student:Number(d.Student), teacher:Number(d.Teacher)};})
    .get(function(error, data){ 
chart(data);})}

