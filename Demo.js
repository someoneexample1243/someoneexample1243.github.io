(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Demo_atlas_1", frames: [[0,195,31,35],[33,195,23,35],[130,160,31,38],[0,0,325,158],[0,160,63,33],[65,160,63,33]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_27 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["Demo_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.starrynightsky = function() {
	this.initialize(img.starrynightsky);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5000,4000);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.008)").ss(3,1,1).p("ArPrNIWfAAQB2AAAAB6IAASnQAAB6h2AAI2fAAQh2AAAAh6IAAynQAAh6B2AAg");
	this.shape.setTransform(39.7179,24.2092,0.474,0.3373);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("ArPLOQh2AAAAh6IAAynQAAh6B2AAIWfAAQB1AAAAB6IAASnQAAB6h1AAg");
	this.shape_1.setTransform(39.7179,24.2092,0.474,0.3373);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1.5,-1.5,82.4,51.5), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_26();
	this.instance_1.setTransform(2.1,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_28();
	this.instance_2.setTransform(-1.45,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1.4,-1.5,16.9,19), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,162.5,79), null);


// stage content:
(lib.Demo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,59,119];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btnPlay.on("click", function (btnPlay){
		this.play();
		}, this);
	}
	this.frame_59 = function() {
		this.stop();
		
		this.link.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		    window.open("http://www.google.com", "_blank");
		}
		
		this.btnPlay2.on("click", function (btnPlay2){
		this.play();
		}, this);
	}
	this.frame_119 = function() {
		this.stop();
		
		this.btnPlay3.on("click", function (btnPlay3){
		this.gotoAndPlay(1);
		}, this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(60).call(this.frame_119).wait(1));

	// Link
	this.link = new lib.Symbol2();
	this.link.name = "link";
	this.link.setTransform(307.25,360.6,1,1,0,0,0,7.7,8.8);
	this.link.alpha = 0;
	this.link._off = true;
	new cjs.ButtonHelper(this.link, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.link).wait(44).to({_off:false},0).wait(1).to({regX:7,regY:8,x:306.55,y:359.8,alpha:0.0667},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:1},0).wait(1).to({regX:7.7,regY:8.8,x:307.25,y:360.6},0).wait(1).to({regX:7,regY:8,x:306.55,y:359.8,alpha:0.9333},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(44));

	// Button
	this.btnPlay = new lib.Symbol3();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(304.05,305.05,1,1,0,0,0,39.7,24.2);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 1);

	this.btnPlay2 = new lib.Symbol3();
	this.btnPlay2.name = "btnPlay2";
	this.btnPlay2.setTransform(304.3,305.15,2.0844,3.0867,0,0,0,39.8,24.2);
	new cjs.ButtonHelper(this.btnPlay2, 0, 1, 1);

	this.btnPlay3 = new lib.Symbol3();
	this.btnPlay3.name = "btnPlay3";
	this.btnPlay3.setTransform(304.4,305.15,0.9723,0.9439,0,0,0,39.8,24.2);
	new cjs.ButtonHelper(this.btnPlay3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnPlay}]}).to({state:[]},1).to({state:[{t:this.btnPlay2}]},58).to({state:[]},1).to({state:[{t:this.btnPlay3}]},59).wait(1));

	// Title
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(274,289);

	this.instance_1 = new lib.CachedBmp_24();
	this.instance_1.setTransform(274.55,243.25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:273.9961,y:288.5967},0).wait(1).to({x:273.9941,y:288.3883},0).wait(1).to({x:273.9925,y:288.2243},0).wait(1).to({x:273.9911,y:288.0761},0).wait(1).to({x:273.9897,y:287.9303},0).wait(1).to({x:273.9882,y:287.779},0).wait(1).to({x:273.9867,y:287.6181},0).wait(1).to({x:273.985,y:287.443},0).wait(1).to({x:273.9832,y:287.252},0).wait(1).to({x:273.9811,y:287.0413},0).wait(1).to({x:273.9789,y:286.8083},0).wait(1).to({x:273.9764,y:286.55},0).wait(1).to({x:273.9737,y:286.2639},0).wait(1).to({x:273.9706,y:285.9462},0).wait(1).to({x:273.9672,y:285.592},0).wait(1).to({x:273.9634,y:285.1982},0).wait(1).to({x:273.9592,y:284.7592},0).wait(1).to({x:273.9544,y:284.2672},0).wait(1).to({x:273.9491,y:283.7149},0).wait(1).to({x:273.9431,y:283.0905},0).wait(1).to({x:273.9363,y:282.3821},0).wait(1).to({x:273.9285,y:281.5691},0).wait(1).to({x:273.9194,y:280.6246},0).wait(1).to({x:273.9086,y:279.5074},0).wait(1).to({x:273.8955,y:278.1469},0).wait(1).to({x:273.8788,y:276.4084},0).wait(1).to({x:273.8551,y:273.9497},0).wait(1).to({x:273.8012,y:268.3484},0).wait(1).to({x:273.7213,y:260.0451},0).wait(1).to({x:273.6967,y:257.4881},0).wait(1).to({x:273.6792,y:255.676},0).wait(1).to({x:273.6654,y:254.2434},0).wait(1).to({x:273.654,y:253.0532},0).wait(1).to({x:273.6442,y:252.0334},0).wait(1).to({x:273.6356,y:251.1436},0).wait(1).to({x:273.628,y:250.3552},0).wait(1).to({x:273.6212,y:249.6508},0).wait(1).to({x:273.6151,y:249.0153},0).wait(1).to({x:273.6096,y:248.4392},0).wait(1).to({x:273.6045,y:247.9147},0).wait(1).to({x:273.5999,y:247.4345},0).wait(1).to({x:273.5957,y:246.9939},0).wait(1).to({x:273.5918,y:246.5882},0).wait(1).to({x:273.5882,y:246.2134},0).wait(1).to({x:273.5848,y:245.8672},0).wait(1).to({x:273.5817,y:245.5463},0).wait(1).to({x:273.5789,y:245.2475},0).wait(1).to({x:273.5762,y:244.9702},0).wait(1).to({x:273.5737,y:244.7103},0).wait(1).to({x:273.5713,y:244.4671},0).wait(1).to({x:273.5691,y:244.2373},0).wait(1).to({x:273.567,y:244.0202},0).wait(1).to({x:273.565,y:243.811},0).wait(1).to({x:273.5631,y:243.6081},0).wait(1).to({x:273.5611,y:243.4069},0).wait(1).to({x:273.5591,y:243.2001},0).wait(1).to({x:273.557,y:242.9758},0).wait(1).to({x:273.5544,y:242.7048},0).wait(1).to({x:273.55,y:242.25},0).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).wait(1).to({x:274.5319,y:243.6425},0).wait(1).to({x:274.5225,y:243.8454},0).wait(1).to({x:274.5152,y:244.005},0).wait(1).to({x:274.5085,y:244.1492},0).wait(1).to({x:274.5019,y:244.2911},0).wait(1).to({x:274.4952,y:244.4384},0).wait(1).to({x:274.4879,y:244.5949},0).wait(1).to({x:274.4801,y:244.7654},0).wait(1).to({x:274.4715,y:244.9512},0).wait(1).to({x:274.462,y:245.1564},0).wait(1).to({x:274.4515,y:245.3831},0).wait(1).to({x:274.4399,y:245.6345},0).wait(1).to({x:274.4271,y:245.9129},0).wait(1).to({x:274.4128,y:246.2222},0).wait(1).to({x:274.3969,y:246.5669},0).wait(1).to({x:274.3792,y:246.9502},0).wait(1).to({x:274.3595,y:247.3774},0).wait(1).to({x:274.3374,y:247.8563},0).wait(1).to({x:274.3126,y:248.3938},0).wait(1).to({x:274.2845,y:249.0015},0).wait(1).to({x:274.2527,y:249.6909},0).wait(1).to({x:274.2162,y:250.4822},0).wait(1).to({x:274.1738,y:251.4014},0).wait(1).to({x:274.1236,y:252.4888},0).wait(1).to({x:274.0625,y:253.8129},0).wait(1).to({x:273.9844,y:255.5049},0).wait(1).to({x:273.8739,y:257.8979},0).wait(1).to({x:273.6223,y:263.3494},0).wait(1).to({x:273.2494,y:271.4307},0).wait(1).to({x:273.1345,y:273.9193},0).wait(1).to({x:273.0531,y:275.683},0).wait(1).to({x:272.9887,y:277.0773},0).wait(1).to({x:272.9353,y:278.2356},0).wait(1).to({x:272.8895,y:279.2282},0).wait(1).to({x:272.8495,y:280.0942},0).wait(1).to({x:272.8141,y:280.8615},0).wait(1).to({x:272.7824,y:281.5471},0).wait(1).to({x:272.7539,y:282.1656},0).wait(1).to({x:272.728,y:282.7263},0).wait(1).to({x:272.7045,y:283.2368},0).wait(1).to({x:272.6829,y:283.7041},0).wait(1).to({x:272.6631,y:284.1329},0).wait(1).to({x:272.6449,y:284.5278},0).wait(1).to({x:272.628,y:284.8925},0).wait(1).to({x:272.6125,y:285.2295},0).wait(1).to({x:272.5981,y:285.5419},0).wait(1).to({x:272.5846,y:285.8326},0).wait(1).to({x:272.5722,y:286.1025},0).wait(1).to({x:272.5605,y:286.3555},0).wait(1).to({x:272.5496,y:286.5922},0).wait(1).to({x:272.5393,y:286.8159},0).wait(1).to({x:272.5295,y:287.0272},0).wait(1).to({x:272.5201,y:287.2308},0).wait(1).to({x:272.511,y:287.4282},0).wait(1).to({x:272.502,y:287.6241},0).wait(1).to({x:272.4927,y:287.8253},0).wait(1).to({x:272.4826,y:288.0436},0).wait(1).to({x:272.4704,y:288.3073},0).wait(1).to({x:272.45,y:288.75},0).wait(1));

	// Text
	this.text = new lib.Symbol1();
	this.text.name = "text";
	this.text.setTransform(304.45,315.05,1,1,0,0,0,81.2,39.4);
	this.text.alpha = 0;
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(44).to({_off:false},0).wait(1).to({regY:39.5,y:315.15,alpha:0.0667},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:1},0).wait(1).to({regY:39.4,y:315.05},0).wait(1).to({regY:39.5,y:315.15,alpha:0.9333},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(44));

	// Shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("ArPrNIWfAAQB2AAAAB6IAASnQAAB6h2AAI2fAAQh2AAAAh6IAAynQAAh6B2AAg");
	this.shape.setTransform(304.0679,305.0592,0.474,0.3373);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5E4E2").s().p("ArPLOQh2AAAAh6IAAynQAAh6B2AAIWfAAQB1AAAAB6IAASnQAAB6h1AAg");
	this.shape_1.setTransform(304.0679,305.0592,0.474,0.3373);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmMjIQAAgpA4AAIKpAAQA4AAAAApIAAGRQAAApg4AAIqpAAQg4AAAAgpg");
	this.shape_2.setTransform(304.05,305.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E4E2").s().p("AlUDyQg4AAAAgpIAAmRQAAgpA4AAIKqAAQA3AAAAApIAAGRQAAApg3AAg");
	this.shape_3.setTransform(304.05,305.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmNjJQAAgpA4AAIKrAAQA4AAAAApIAAGSQAAAqg4AAIqrAAQg4AAAAgqg");
	this.shape_4.setTransform(304.05,305.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5E4E2").s().p("AlUDzQg4AAAAgqIAAmSQAAgpA4AAIKqAAQA3AAAAApIAAGSQAAAqg3AAg");
	this.shape_5.setTransform(304.05,305.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmNjJQAAgpA4AAIKsAAQA3AAAAApIAAGTQAAApg3AAIqsAAQg4AAAAgpg");
	this.shape_6.setTransform(304.05,305.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E4E2").s().p("AlVDzQg4AAAAgpIAAmTQAAgpA4AAIKsAAQA3AAAAApIAAGTQAAApg3AAg");
	this.shape_7.setTransform(304.05,305.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmNjJQAAgqA4AAIKsAAQA4AAAAAqIAAGUQAAApg4AAIqsAAQg4AAAAgpg");
	this.shape_8.setTransform(304.05,305.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5E4E1").s().p("AlVD0Qg4AAAAgqIAAmUQAAgpA4AAIKsAAQA4AAgBApIAAGUQABAqg4AAg");
	this.shape_9.setTransform(304.05,305.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmOjLQAAgpA4AAIKtAAQA4AAAAApIAAGWQAAAqg4AAIqtAAQg4AAAAgqg");
	this.shape_10.setTransform(304.05,305.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E5E4E1").s().p("AlWD1Qg5AAAAgqIAAmWQAAgpA5AAIKtAAQA4AAAAApIAAGWQAAAqg4AAg");
	this.shape_11.setTransform(304.05,305.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmQjLQAAgqA5AAIKvAAQA5AAAAAqIAAGXQAAAqg5AAIqvAAQg5AAAAgqg");
	this.shape_12.setTransform(304.05,305.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E5E4E0").s().p("AlXD2Qg5AAAAgqIAAmYQAAgpA5AAIKvAAQA4AAAAApIAAGYQAAAqg4AAg");
	this.shape_13.setTransform(304.05,305.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmRjNQAAgqA4AAIKzAAQA4AAAAAqIAAGbQAAAqg4AAIqzAAQg4AAAAgqg");
	this.shape_14.setTransform(304.075,305.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E5E4E0").s().p("AlZD4Qg4AAAAgqIAAmbQAAgqA4AAIKzAAQA4AAAAAqIAAGbQAAAqg4AAg");
	this.shape_15.setTransform(304.075,305.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmTjPQAAgqA4AAIK3AAQA4AAAAAqIAAGeQAAArg4AAIq3AAQg4AAAAgrg");
	this.shape_16.setTransform(304.05,305.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5E4DF").s().p("AlbD6Qg4AAAAgrIAAmeQAAgqA4AAIK3AAQA4AAABAqIAAGeQgBArg4AAg");
	this.shape_17.setTransform(304.05,305.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmWjSQAAgrA5AAIK7AAQA5AAAAArIAAGkQAAAsg5AAIq7AAQg5AAAAgsg");
	this.shape_18.setTransform(304.075,305);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E5E4DD").s().p("AldD+Qg5gBAAgrIAAmkQAAgqA5gBIK7AAQA5ABAAAqIAAGkQAAArg5ABg");
	this.shape_19.setTransform(304.075,305);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmajVQAAgrA6AAILBAAQA6AAAAArIAAGqQAAAsg6AAIrBAAQg6AAAAgsg");
	this.shape_20.setTransform(304.1,304.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E5E4DC").s().p("AlgEBQg6AAAAgsIAAmqQAAgrA6AAILCAAQA5AAAAArIAAGqQAAAsg5AAg");
	this.shape_21.setTransform(304.1,304.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmfjZQAAgtA7AAILKAAQA5AAAAAtIAAGzQAAAtg5AAIrKAAQg7AAAAgtg");
	this.shape_22.setTransform(304.1,304.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6E3DA").s().p("AlkEGQg6AAgBgtIAAmyQABgsA6AAILJAAQA6AAABAsIAAGyQgBAtg6AAg");
	this.shape_23.setTransform(304.1,304.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmljeQAAgtA8AAILUAAQA6AAAAAtIAAG9QAAAug6AAIrUAAQg8AAAAgug");
	this.shape_24.setTransform(304.1,304.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6E3D7").s().p("AlpEMQg8AAABguIAAm8QgBgtA8gBILUAAQA6ABAAAtIAAG8QAAAug6AAg");
	this.shape_25.setTransform(304.1,304.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmsjlQAAguA9AAILgAAQA8AAAAAuIAAHKQAAAvg8AAIrgAAQg9AAAAgvg");
	this.shape_26.setTransform(304.125,304.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6E3D4").s().p("AlvEUQg9AAAAgvIAAnKQAAguA9AAILgAAQA8AAAAAuIAAHKQAAAvg8AAg");
	this.shape_27.setTransform(304.125,304.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(3,1,1).p("Am0jtQAAgwA+AAILuAAQA9AAAAAwIAAHaQAAAxg9AAIruAAQg+AAAAgxg");
	this.shape_28.setTransform(304.125,304.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E3D0").s().p("Al2EeQg+AAAAgxIAAnZQAAgxA+AAILuAAQA9AAAAAxIAAHZQAAAxg9AAg");
	this.shape_29.setTransform(304.125,304.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(3,1,1).p("Am/j2QAAgyA/AAIMBAAQA/AAAAAyIAAHsQAAAzg/AAIsBAAQg/AAAAgzg");
	this.shape_30.setTransform(304.175,304.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7E3CB").s().p("AmAEpQg/AAAAgzIAAnsQAAgyA/AAIMBAAQA/AAAAAyIAAHsQAAAzg/AAg");
	this.shape_31.setTransform(304.175,304.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(3,1,1).p("AnMkBQAAg1BBAAIMXAAQBBAAAAA1IAAIDQAAA1hBAAIsXAAQhBAAAAg1g");
	this.shape_32.setTransform(304.2,304.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7E2C5").s().p("AmKE3QhCAAAAg1IAAoDQAAg1BCAAIMWAAQBBAAAAA1IAAIDQAAA1hBAAg");
	this.shape_33.setTransform(304.2,304.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(3,1,1).p("AnbkPQAAg3BDAAIMxAAQBDAAAAA3IAAIeQAAA4hDAAIsxAAQhDAAAAg4g");
	this.shape_34.setTransform(304.25,304.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E8E2BF").s().p("AmYFHQhDAAAAg4IAAoeQAAg3BDAAIMwAAQBDAAABA3IAAIeQgBA4hDAAg");
	this.shape_35.setTransform(304.25,304.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(3,1,1).p("AnskfQAAg6BFAAINPAAQBFAAAAA6IAAI+QAAA7hFAAItPAAQhFAAAAg7g");
	this.shape_36.setTransform(304.275,304.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E8E1B7").s().p("AmnFaQhFAAAAg7IAAo+QAAg6BFAAINPAAQBFAAAAA6IAAI+QAAA7hFAAg");
	this.shape_37.setTransform(304.275,304.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(3,1,1).p("AoBkxQAAg/BIAAINzAAQBIAAAAA/IAAJjQAAA/hIAAItzAAQhIAAAAg/g");
	this.shape_38.setTransform(304.325,304.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E9E1AD").s().p("Am5FxQhIAAAAg/IAApjQAAg/BIAAINzAAQBIAAAAA/IAAJjQAAA/hIAAg");
	this.shape_39.setTransform(304.325,304.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(3,1,1).p("AoZlHQAAhDBLAAIOdAAQBLAAAABDIAAKPQAABDhLAAIudAAQhLAAAAhDg");
	this.shape_40.setTransform(304.375,304.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EAE0A2").s().p("AnOGLQhLAAAAhDIAAqPQAAhDBLAAIOdAAQBLAAAABDIAAKPQAABDhLAAg");
	this.shape_41.setTransform(304.375,304.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ao2lgQAAhIBQAAIPNAAQBQAAAABIIAALBQAABJhQAAIvNAAQhQAAAAhJg");
	this.shape_42.setTransform(304.425,303.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EBDF96").s().p("AnmGpQhQAAAAhIIAArBQAAhIBQAAIPNAAQBQAAAABIIAALBQAABIhQAAg");
	this.shape_43.setTransform(304.425,303.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(3,1,1).p("ApWl9QAAhPBUAAIQFAAQBUAAAABPIAAL7QAABPhUAAIwFAAQhUAAAAhPg");
	this.shape_44.setTransform(304.525,303.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ECDE87").s().p("AoCHNQhUAAAAhPIAAr7QAAhPBUAAIQFAAQBUAAAABPIAAL7QAABPhUAAg");
	this.shape_45.setTransform(304.525,303.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ap6mdQAAhVBZAAIRDAAQBZAAAABVIAAM7QAABVhZAAIxDAAQhZAAAAhVg");
	this.shape_46.setTransform(304.575,303.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDDE77").s().p("AohH0QhZAAAAhWIAAs8QAAhUBZAAIRDAAQBZAAAABUIAAM8QAABVhZABg");
	this.shape_47.setTransform(304.575,303.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(3,1,1).p("Aqbm7QAAhbBeAAIR7AAQBeAAAABbIAAN3QAABbheAAIx7AAQheAAAAhbg");
	this.shape_48.setTransform(304.675,303.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EEDD68").s().p("Ao9IXQheAAAAhbIAAt3QAAhbBeAAIR7AAQBeAAAABbIAAN3QAABbheAAg");
	this.shape_49.setTransform(304.675,303.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(3,1,1).p("Aq3nUQAAhgBiAAISrAAQBiAAAABgIAAOpQAABghiAAIyrAAQhiAAAAhgg");
	this.shape_50.setTransform(304.725,303.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EFDC5C").s().p("ApVI1QhiAAAAhgIAAupQAAhgBiAAISrAAQBiAAAABgIAAOpQAABghiAAg");
	this.shape_51.setTransform(304.725,303.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(3,1,1).p("ArPnqQAAhlBlAAITVAAQBlAAAABlIAAPVQAABkhlAAIzVAAQhlAAAAhkg");
	this.shape_52.setTransform(304.775,302.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F0DB51").s().p("ApqJPQhlAAAAhkIAAvUQAAhlBlAAITVAAQBlAAAABlIAAPUQAABkhlAAg");
	this.shape_53.setTransform(304.775,302.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(3,1,1).p("Arkn8QAAhpBoAAIT5AAQBoAAAABpIAAP5QAABphoAAIz5AAQhoAAAAhpg");
	this.shape_54.setTransform(304.825,302.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F1DB47").s().p("Ap8JmQhoAAAAhpIAAv5QAAhpBoAAIT5AAQBoAAAABpIAAP5QAABphoAAg");
	this.shape_55.setTransform(304.825,302.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ar2oMQAAhsBrAAIUYAAQBqAAAABsIAAQaQAABrhqAAI0YAAQhrAAAAhrg");
	this.shape_56.setTransform(304.85,302.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F1DA3F").s().p("AqLJ5QhrAAAAhrIAAwaQAAhsBrAAIUYAAQBqAAAABsIAAQaQAABrhqAAg");
	this.shape_57.setTransform(304.85,302.575);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(3,1,1).p("AsFoaQAAhuBtAAIUyAAQBsAAAABuIAAQ1QAABuhsAAI0yAAQhtAAAAhug");
	this.shape_58.setTransform(304.9,302.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F2DA39").s().p("AqZKKQhsgBAAhuIAAw1QAAhvBsAAIUyAAQBtAAAABvIAAQ1QAABuhtABg");
	this.shape_59.setTransform(304.9,302.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(3,1,1).p("AsSolQAAhxBvAAIVHAAQBvAAAABxIAARMQAABwhvAAI1HAAQhvAAAAhwg");
	this.shape_60.setTransform(304.925,302.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2D933").s().p("AqjKXQhvAAAAhwIAAxMQAAhxBvAAIVHAAQBvAAAABxIAARMQAABwhvAAg");
	this.shape_61.setTransform(304.925,302.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(3,1,1).p("AscovQAAhzBvAAIVaAAQBwAAAABzIAAReQAABzhwAAI1aAAQhvAAAAhzg");
	this.shape_62.setTransform(304.975,302.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F3D92E").s().p("AqtKjQhvAAAAh0IAAxdQAAh0BvAAIVaAAQBwAAAAB0IAARdQAAB0hwAAg");
	this.shape_63.setTransform(304.975,302.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(3,1,1).p("Aslo2QAAh1BxAAIVpAAQBxAAAAB1IAARuQAAB0hxAAI1pAAQhxAAAAh0g");
	this.shape_64.setTransform(304.975,302.25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3D92A").s().p("Aq0KsQhxAAAAh0IAAxuQAAh1BxAAIVpAAQBxAAAAB1IAARuQAAB0hxAAg");
	this.shape_65.setTransform(304.975,302.25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(3,1,1).p("Asso9QAAh2ByAAIV1AAQByAAAAB2IAAR7QAAB2hyAAI11AAQhyAAAAh2g");
	this.shape_66.setTransform(305,302.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F3D927").s().p("Aq6K0QhyAAAAh2IAAx7QAAh2ByAAIV1AAQByAAAAB2IAAR7QAAB2hyAAg");
	this.shape_67.setTransform(305,302.225);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(3,1,1).p("AsypCQAAh3BzAAIV/AAQBzAAAAB3IAASFQAAB3hzAAI1/AAQhzAAAAh3g");
	this.shape_68.setTransform(305,302.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F3D924").s().p("Aq/K6QhzAAAAh3IAAyFQAAh3BzAAIV/AAQBzAAAAB3IAASFQAAB3hzAAg");
	this.shape_69.setTransform(305,302.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(3,1,1).p("As3pGQAAh4B0AAIWHAAQB0AAAAB4IAASOQAAB3h0AAI2HAAQh0AAAAh3g");
	this.shape_70.setTransform(305,302.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F4D822").s().p("ArDK/QhzAAAAh3IAAyOQAAh4BzAAIWHAAQBzAAABB4IAASOQgBB3hzAAg");
	this.shape_71.setTransform(305,302.15);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(3,1,1).p("As6pJQAAh5B0AAIWNAAQB0AAAAB5IAASUQAAB4h0AAI2NAAQh0AAAAh4g");
	this.shape_72.setTransform(305.025,302.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F4D821").s().p("ArGLDQh0AAAAh4IAAyUQAAh5B0AAIWNAAQB0AAAAB5IAASUQAAB4h0AAg");
	this.shape_73.setTransform(305.025,302.125);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(3,1,1).p("As9pMQAAh5B0AAIWSAAQB1AAAAB5IAASZQAAB5h1AAI2SAAQh0AAAAh5g");
	this.shape_74.setTransform(305.05,302.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F4D81F").s().p("ArILGQh1AAAAh4IAAyaQAAh5B1AAIWRAAQB1AAAAB5IAASaQAAB4h1AAg");
	this.shape_75.setTransform(305.05,302.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(3,1,1).p("As/pOQAAh5B1AAIWWAAQB0AAAAB5IAASdQAAB5h0AAI2WAAQh1AAAAh5g");
	this.shape_76.setTransform(305.025,302.075);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F4D81E").s().p("ArKLIQh1AAAAh5IAAydQAAh5B1AAIWWAAQB0AAAAB5IAASdQAAB5h0AAg");
	this.shape_77.setTransform(305.025,302.075);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(3,1,1).p("AtBpPQAAh6B1AAIWZAAQB1AAAAB6IAASgQAAB5h1AAI2ZAAQh1AAAAh5g");
	this.shape_78.setTransform(305.05,302.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F4D81E").s().p("ArMLKQh1AAAAh5IAAygQAAh6B1AAIWZAAQB1AAAAB6IAASgQAAB5h1AAg");
	this.shape_79.setTransform(305.05,302.075);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(3,1,1).p("AtCpQQAAh6B1AAIWbAAQB1AAAAB6IAASiQAAB5h1AAI2bAAQh1AAAAh5g");
	this.shape_80.setTransform(305.05,302.075);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F4D81D").s().p("ArNLLQh1AAAAh5IAAyiQAAh6B1AAIWbAAQB1AAAAB6IAASiQAAB5h1AAg");
	this.shape_81.setTransform(305.05,302.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(3,1,1).p("AtDpRQAAh6B2AAIWcAAQB1AAAAB6IAASjQAAB6h1AAI2cAAQh2AAAAh6g");
	this.shape_82.setTransform(305.05,302.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F4D81D").s().p("ArOLMQh1AAAAh6IAAyjQAAh6B1AAIWdAAQB1AAAAB6IAASjQAAB6h1AAg");
	this.shape_83.setTransform(305.05,302.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(3,1,1).p("AtEpSQAAh6B2AAIWdAAQB1AAAAB6IAASlQAAB6h1AAI2dAAQh2AAAAh6g");
	this.shape_84.setTransform(305.05,302.05);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F4D81C").s().p("ArOLNQh1AAgBh6IAAykQABh7B1AAIWdAAQB2AAAAB7IAASkQAAB6h2AAg");
	this.shape_85.setTransform(305.05,302.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(3,1,1).p("AtEpSQAAh7B1AAIWeAAQB2AAAAB7IAASmQAAB6h2AAI2eAAQh1AAAAh6g");
	this.shape_86.setTransform(305.05,302.05);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F4D81C").s().p("ArPLNQh1AAAAh5IAAymQAAh6B1AAIWfAAQB1AAAAB6IAASmQAAB5h1AAg");
	this.shape_87.setTransform(305.05,302.05);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(3,1,1).p("AtFpTQAAh6B2AAIWfAAQB2AAAAB6IAASnQAAB6h2AAI2fAAQh2AAAAh6g");
	this.shape_88.setTransform(305.05,302.05);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F4D81C").s().p("ArPLOQh1AAAAh6IAAynQAAh6B1AAIWfAAQB2AAgBB6IAASnQABB6h2AAg");
	this.shape_89.setTransform(305.05,302.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(3,1,1).p("AnpnVIPTAAQBQAAAABQIAAMLQAABQhQAAIvTAAQhQAAAAhQIAAsLQAAhQBQAAg");
	this.shape_90.setTransform(305.0406,302.0635,1.4692,1.5276);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F4D81C").s().p("AnpHWQhQAAAAhQIAAsLQAAhQBQAAIPTAAQBQAAAABQIAAMLQAABQhQAAg");
	this.shape_91.setTransform(305.0406,302.0635,1.4692,1.5276);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(3,1,1).p("AscouQAAh0BvAAIVaAAQBwAAAAB0IAAReQAABzhwAAI1aAAQhvAAAAhzg");
	this.shape_92.setTransform(304.975,302.325);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F3D92E").s().p("AqtKjQhvAAAAhzIAAxeQAAh0BvAAIVaAAQBwAAAAB0IAAReQAABzhwAAg");
	this.shape_93.setTransform(304.975,302.325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(3,1,1).p("Am0jsQAAgxA+AAILuAAQA9AAAAAxIAAHZQAAAxg9AAIruAAQg+AAAAgxg");
	this.shape_94.setTransform(304.125,304.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29,p:{y:304.8}},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_29,p:{y:304.775}},{t:this.shape_94}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Background
	this.instance_2 = new lib.starrynightsky();
	this.instance_2.setTransform(0,0,0.12,0.2212);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(300,300,300,584.7);
// library properties:
lib.properties = {
	id: '80CA6E608F20D74C9BDFABC2CC00FCB9',
	width: 600,
	height: 600,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/starrynightsky.jpg", id:"starrynightsky"},
		{src:"images/Demo_atlas_1.png", id:"Demo_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['80CA6E608F20D74C9BDFABC2CC00FCB9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;