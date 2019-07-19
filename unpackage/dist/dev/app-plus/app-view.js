var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'msg']]],[1,'']]])
Z([3,'txt'])
Z([3,'text'])
Z([[7],[3,'myval']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'movie-score-wapper'])
Z([3,'__i0__'])
Z([3,'yello'])
Z([[7],[3,'yelloScore']])
Z([3,'star-icon'])
Z([3,'/static/star1.png'])
Z([3,'__i1__'])
Z([3,'gray'])
Z([[7],[3,'grayScore']])
Z(z[5])
Z([3,'/static/star2.png'])
Z([[2,'=='],[[7],[3,'showNum']],[1,1]])
Z([3,'movie-score'])
Z([a,[[7],[3,'innerScore']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'black'])
Z([3,'__e'])
Z([3,'cover'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longpress']],[[4],[[5],[[4],[[5],[[5],[1,'operator']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'widthFix'])
Z([[7],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page'])
Z([1,true])
Z([3,'carousel'])
Z([1,1000])
Z(z[2])
Z([1,3000])
Z([3,'__i0__'])
Z(z[3])
Z([[7],[3,'carouselList']])
Z([3,'imgs1'])
Z([[6],[[7],[3,'carousel']],[3,'image']])
Z([3,'page-block super-hot'])
Z([3,'hot-title-wapper'])
Z([3,'hot-icon'])
Z([3,'../../static/icont1.png'])
Z([3,'hot-title'])
Z([3,'热门超英'])
Z([3,'page-block hot'])
Z([3,'true'])
Z([3,'__i1__'])
Z([3,'superhero'])
Z([[7],[3,'hotSuperheroList']])
Z([3,'id'])
Z([3,'single-poster'])
Z([3,'poster-wapper'])
Z([3,'poster'])
Z([[6],[[7],[3,'superhero']],[3,'cover']])
Z([3,'movie-name'])
Z([a,[[6],[[7],[3,'superhero']],[3,'name']]])
Z([[6],[[7],[3,'superhero']],[3,'score']])
Z([3,'1'])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z([3,'热门预告'])
Z([3,'hot-movie page-block'])
Z([3,'__i2__'])
Z([3,'trailer'])
Z([[7],[3,'hotTrailerList']])
Z([3,'__e'])
Z([3,'hot-movie-single'])
Z([[4],[[5],[[4],[[5],[[5],[1,'play']],[[4],[[5],[[4],[[5],[[5],[1,'meIsPlaying']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'trailer']],[3,'id']])
Z(z[45])
Z([[6],[[7],[3,'trailer']],[3,'poster']])
Z([[6],[[7],[3,'trailer']],[3,'trailer']])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z([3,'猜你喜欢'])
Z([3,'page-block guess-u-like'])
Z([3,'gIndex'])
Z([3,'guess'])
Z([[7],[3,'guessULikeList']])
Z([3,' single-like-movie'])
Z([3,'like-movie'])
Z([[6],[[7],[3,'guess']],[3,'cover']])
Z([3,' movie-desc'])
Z([3,' movie-title'])
Z([a,[[6],[[7],[3,'guess']],[3,'name']]])
Z([1,5])
Z([3,'0'])
Z([3,' movie-info'])
Z([a,[[6],[[7],[3,'guess']],[3,'basicInfo']]])
Z(z[67])
Z([a,[[6],[[7],[3,'guess']],[3,'releaseDate']]])
Z(z[42])
Z([3,' movie-oper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'praiseMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'gIndex']])
Z([3,'praise-ico'])
Z([3,'../../static/iconb1.png'])
Z([3,'praise-me'])
Z([3,'点赞'])
Z([[6],[[7],[3,'animationDataArr']],[[7],[3,'gIndex']]])
Z([3,'praise-me animation-opacity'])
Z([3,'+1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page page-fill'])
Z([3,'header'])
Z([[7],[3,'userIsLogin']])
Z([3,'../meInfo/meInfo'])
Z([3,'face'])
Z([[6],[[7],[3,'userInfo']],[3,'faceImage']])
Z(z[5])
Z([3,'../../static/icond1.png'])
Z(z[3])
Z([3,'info-wapper '])
Z([3,'nickname'])
Z([a,[[6],[[7],[3,'userInfo']],[3,'nickname']]])
Z([3,'nav-info'])
Z([a,[[2,'+'],[1,'ID:'],[[6],[[7],[3,'userInfo']],[3,'id']]]])
Z(z[10])
Z([3,'nickname regist-login'])
Z([3,'../registLogin/registLogin'])
Z([3,'注册/登录'])
Z(z[3])
Z([3,'set-wapper'])
Z([3,'settings'])
Z([3,'../../static/icont1.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page page-fill'])
Z([3,'pending-wapper'])
Z([3,'pending-face'])
Z([3,'face'])
Z([3,'scaleToFill'])
Z([[7],[3,'tempFace']])
Z([3,'notice'])
Z([3,'notice-words'])
Z([3,'* 请从相册中选择等比宽高的图片噢~'])
Z([3,'footer-opertor'])
Z([3,'__e'])
Z([3,'opertor-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changePendingFace']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[11])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'upload']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page page-fill'])
Z([3,'page-block info-list'])
Z([3,'item-wapper face-line-upbottom'])
Z([3,'info-words'])
Z([3,'头像'])
Z([3,'right-wapper'])
Z([3,'__e'])
Z([3,'face'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'operator']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'globalUser']],[3,'faceImage']])
Z([3,'arrow-bolck'])
Z([3,'arrow-ico'])
Z([3,'../../static/right.png'])
Z([3,'line-top'])
Z([3,'line'])
Z(z[3])
Z(z[4])
Z([3,'昵称'])
Z(z[6])
Z([3,'gray-fields'])
Z([a,[[6],[[7],[3,'globalUser']],[3,'nickname']]])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[3])
Z(z[4])
Z([3,'生日'])
Z(z[6])
Z(z[20])
Z([a,[[6],[[7],[3,'globalUser']],[3,'birthday']]])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[3])
Z(z[4])
Z([3,'性别'])
Z(z[6])
Z(z[20])
Z([[2,'=='],[[6],[[7],[3,'globalUser']],[3,'sex']],[1,1]])
Z([3,'男'])
Z([[2,'=='],[[6],[[7],[3,'globalUser']],[3,'sex']],[1,2]])
Z([3,'女'])
Z([3,'未知'])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z([3,'foot-wapper'])
Z([3,'margin-top:10rpx;'])
Z(z[7])
Z([3,'foot-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'cleanStorage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清理缓存'])
Z(z[7])
Z(z[56])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'logout']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[54])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page'])
Z([3,'player'])
Z([3,'movie'])
Z([3,'myTrailer'])
Z([[6],[[7],[3,'trailerInfo']],[3,'poster']])
Z([[6],[[7],[3,'trailerInfo']],[3,'trailer']])
Z([3,'movie-info'])
Z([[2,'+'],[1,'../cover/cover?cover\x3d'],[[6],[[7],[3,'trailerInfo']],[3,'cover']]])
Z([3,'cover'])
Z([[6],[[7],[3,'trailerInfo']],[3,'cover']])
Z([3,'movie-desc'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'name']]])
Z([3,'basic-info'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'basicInfo']]])
Z(z[14])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'originalName']]])
Z(z[14])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'totalTime']]])
Z(z[14])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'releaseDate']]])
Z([3,'score-block'])
Z([3,'big-score'])
Z([3,'score-words'])
Z([3,'综合评分:'])
Z([3,'movie-score'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'score']]])
Z([3,'score-star'])
Z([[2,'>='],[[6],[[7],[3,'trailerInfo']],[3,'score']],[1,0]])
Z([[6],[[7],[3,'trailerInfo']],[3,'score']])
Z([3,'0'])
Z([3,'praise-counts'])
Z([a,[[2,'+'],[[6],[[7],[3,'trailerInfo']],[3,'prisedCounts']],[1,'人点赞']]])
Z([3,'line-wapper'])
Z([3,'line'])
Z([3,'plots-block'])
Z([3,'plots-title'])
Z([3,'剧情介绍'])
Z([3,'plots-desc'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'plotDesc']]])
Z([3,'scroll-block'])
Z(z[37])
Z([3,'剧照'])
Z([3,'scroll-list'])
Z([3,'__i0__'])
Z([3,'director'])
Z([[7],[3,'directorArray']])
Z([3,'actor-wapper'])
Z([3,'single-actor'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'director']],[3,'photo']])
Z([3,'actor-name'])
Z([a,[[6],[[7],[3,'director']],[3,'name']]])
Z([3,'actor-role'])
Z([a,[[6],[[7],[3,'director']],[3,'actName']]])
Z([3,'__i1__'])
Z([3,'actor'])
Z([[7],[3,'actorArray']])
Z(z[48])
Z(z[49])
Z(z[50])
Z([[6],[[7],[3,'actor']],[3,'photo']])
Z(z[52])
Z([a,[[6],[[7],[3,'actor']],[3,'name']]])
Z(z[54])
Z([a,[[6],[[7],[3,'actor']],[3,'actName']]])
Z(z[41])
Z(z[37])
Z(z[43])
Z(z[44])
Z([3,'__i2__'])
Z([3,'img'])
Z([[7],[3,'plotPicsArray']])
Z([3,'plot-image'])
Z(z[50])
Z([[7],[3,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'body'])
Z([3,'__e'])
Z(z[2])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'reset']],[[4],[[5],[[4],[[5],[[5],[1,'formReset']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'face-wapper'])
Z([3,'face'])
Z([3,'../../static/icond2.png'])
Z([3,'info-wapper'])
Z([3,'words-lbl'])
Z([3,'帐号'])
Z([3,'input'])
Z([3,'username'])
Z([3,'请输入用户名'])
Z([3,'graywords'])
Z([3,'text'])
Z([3,''])
Z(z[8])
Z([3,'margin-top:40rpx;'])
Z(z[9])
Z([3,'密码'])
Z(z[11])
Z([3,'password'])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[14])
Z(z[15])
Z(z[16])
Z([3,'submit'])
Z([3,'margin-top:60rpx;width:90%;'])
Z([3,'primary'])
Z([3,'登录/注册'])
Z([3,'third-wapper'])
Z([3,'third-line'])
Z([3,'single-line'])
Z([3,'line'])
Z([3,'third-words'])
Z([3,'第三方账号登录'])
Z(z[34])
Z(z[35])
Z([3,'third-icos-wapper'])
Z(z[2])
Z([3,'third-ico'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'appOAuthLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'weixin'])
Z([3,'../../static/icona1.png'])
Z(z[2])
Z(z[42])
Z(z[43])
Z([3,'qq'])
Z([3,'../../static/iconb1.png'])
Z([3,'margin-left:80rpx;'])
Z(z[2])
Z(z[42])
Z(z[43])
Z([3,'sinaweibo'])
Z([3,'../../static/iconc1.png'])
Z(z[51])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page'])
Z([3,'search-block'])
Z([3,'search-ico-wapper'])
Z([3,'search-ico'])
Z([3,'../../static/iconc2.png'])
Z([3,'__e'])
Z([3,'search-text'])
Z([3,'search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'searchMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'10'])
Z([3,'搜索预告'])
Z([3,'text'])
Z([3,' movie-list page-block'])
Z([3,'__i0__'])
Z([3,'trailer'])
Z([[7],[3,'trailerList']])
Z([3,'movie-wapper'])
Z(z[6])
Z([3,'poster'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showTrailer']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'trailer']],[3,'id']])
Z([[6],[[7],[3,'trailer']],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./componente/helloComp.wxml','./componente/trailerStars.wxml','./pages/cover/cover.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/meFace/meFace.wxml','./pages/meInfo/meInfo.wxml','./pages/movie/movie.wxml','./pages/registLogin/registLogin.wxml','./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./componente/helloComp.wxml:view:1:1")
var oB=_n('view')
_rz(z,oB,'bind:__l',0,e,s,gg)
var xC=_oz(z,1,e,s,gg)
_(oB,xC)
cs.push("./componente/helloComp.wxml:view:1:35")
var oD=_n('view')
cs.push("./componente/helloComp.wxml:input:1:41")
var fE=_mz(z,'input',['class',2,'type',1,'value',2],[],e,s,gg)
cs.pop()
_(oD,fE)
cs.pop()
_(oB,oD)
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./componente/trailerStars.wxml:view:1:1")
var hG=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
var cI=_v()
_(hG,cI)
cs.push("./componente/trailerStars.wxml:block:1:49")
var oJ=function(aL,lK,tM,gg){
cs.push("./componente/trailerStars.wxml:block:1:49")
cs.push("./componente/trailerStars.wxml:image:1:122")
var bO=_mz(z,'image',['class',5,'src',1],[],aL,lK,gg)
cs.pop()
_(tM,bO)
cs.pop()
return tM
}
_wp('./componente/trailerStars.wxml:block:1:49: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
cI.wxXCkey=2
_2z(z,4,oJ,e,s,gg,cI,'yello','__i0__','')
cs.pop()
var oP=_v()
_(hG,oP)
cs.push("./componente/trailerStars.wxml:block:1:187")
var xQ=function(fS,oR,cT,gg){
cs.push("./componente/trailerStars.wxml:block:1:187")
cs.push("./componente/trailerStars.wxml:image:1:258")
var oV=_mz(z,'image',['class',10,'src',1],[],fS,oR,gg)
cs.pop()
_(cT,oV)
cs.pop()
return cT
}
_wp('./componente/trailerStars.wxml:block:1:187: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
oP.wxXCkey=2
_2z(z,9,xQ,e,s,gg,oP,'gray','__i1__','')
cs.pop()
var oH=_v()
_(hG,oH)
if(_oz(z,12,e,s,gg)){oH.wxVkey=1
cs.push("./componente/trailerStars.wxml:block:1:323")
cs.push("./componente/trailerStars.wxml:view:1:353")
var cW=_n('view')
_rz(z,cW,'class',13,e,s,gg)
var oX=_oz(z,14,e,s,gg)
_(cW,oX)
cs.pop()
_(oH,cW)
cs.pop()
}
oH.wxXCkey=1
cs.pop()
_(r,hG)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./pages/cover/cover.wxml:view:1:1")
var aZ=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/cover/cover.wxml:image:1:36")
var t1=_mz(z,'image',['bindlongpress',2,'class',1,'data-event-opts',2,'mode',3,'src',4],[],e,s,gg)
cs.pop()
_(aZ,t1)
cs.pop()
_(r,aZ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
cs.push("./pages/index/index.wxml:view:1:1")
var b3=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:swiper:1:35")
var o4=_mz(z,'swiper',['autoplay',2,'class',1,'duration',2,'indicatorDots',3,'interval',4],[],e,s,gg)
var x5=_v()
_(o4,x5)
cs.push("./pages/index/index.wxml:block:1:146")
var o6=function(c8,f7,h9,gg){
cs.push("./pages/index/index.wxml:block:1:146")
cs.push("./pages/index/index.wxml:swiper-item:1:224")
var cAB=_n('swiper-item')
cs.push("./pages/index/index.wxml:image:1:237")
var oBB=_mz(z,'image',['class',10,'src',1],[],c8,f7,gg)
cs.pop()
_(cAB,oBB)
cs.pop()
_(h9,cAB)
cs.pop()
return h9
}
_wp('./pages/index/index.wxml:block:1:146: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
x5.wxXCkey=2
_2z(z,9,o6,e,s,gg,x5,'carousel','__i0__','')
cs.pop()
cs.pop()
_(b3,o4)
cs.push("./pages/index/index.wxml:view:1:322")
var lCB=_n('view')
_rz(z,lCB,'class',12,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:357")
var aDB=_n('view')
_rz(z,aDB,'class',13,e,s,gg)
cs.push("./pages/index/index.wxml:image:1:388")
var tEB=_mz(z,'image',['class',14,'src',1],[],e,s,gg)
cs.pop()
_(aDB,tEB)
cs.push("./pages/index/index.wxml:view:1:450")
var eFB=_n('view')
_rz(z,eFB,'class',16,e,s,gg)
var bGB=_oz(z,17,e,s,gg)
_(eFB,bGB)
cs.pop()
_(aDB,eFB)
cs.pop()
_(lCB,aDB)
cs.pop()
_(b3,lCB)
cs.push("./pages/index/index.wxml:scroll-view:1:507")
var oHB=_mz(z,'scroll-view',['class',18,'scrollX',1],[],e,s,gg)
var xIB=_v()
_(oHB,xIB)
cs.push("./pages/index/index.wxml:block:1:559")
var oJB=function(cLB,fKB,hMB,gg){
cs.push("./pages/index/index.wxml:block:1:559")
cs.push("./pages/index/index.wxml:view:1:654")
var cOB=_n('view')
_rz(z,cOB,'class',24,cLB,fKB,gg)
cs.push("./pages/index/index.wxml:view:1:682")
var oPB=_n('view')
_rz(z,oPB,'class',25,cLB,fKB,gg)
cs.push("./pages/index/index.wxml:image:1:710")
var lQB=_mz(z,'image',['class',26,'src',1],[],cLB,fKB,gg)
cs.pop()
_(oPB,lQB)
cs.push("./pages/index/index.wxml:view:1:766")
var aRB=_n('view')
_rz(z,aRB,'class',28,cLB,fKB,gg)
var tSB=_oz(z,29,cLB,fKB,gg)
_(aRB,tSB)
cs.pop()
_(oPB,aRB)
cs.push("./pages/index/index.wxml:trailer-stars:1:816")
var eTB=_mz(z,'trailer-stars',['innerScore',30,'showNum',1],[],cLB,fKB,gg)
cs.pop()
_(oPB,eTB)
cs.pop()
_(cOB,oPB)
cs.pop()
_(hMB,cOB)
cs.pop()
return hMB
}
xIB.wxXCkey=4
_2z(z,22,oJB,e,s,gg,xIB,'superhero','__i1__','id')
cs.pop()
cs.pop()
_(b3,oHB)
cs.push("./pages/index/index.wxml:view:1:928")
var bUB=_n('view')
_rz(z,bUB,'class',32,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:963")
var oVB=_n('view')
_rz(z,oVB,'class',33,e,s,gg)
cs.push("./pages/index/index.wxml:image:1:994")
var xWB=_mz(z,'image',['class',34,'src',1],[],e,s,gg)
cs.pop()
_(oVB,xWB)
cs.push("./pages/index/index.wxml:view:1:1056")
var oXB=_n('view')
_rz(z,oXB,'class',36,e,s,gg)
var fYB=_oz(z,37,e,s,gg)
_(oXB,fYB)
cs.pop()
_(oVB,oXB)
cs.pop()
_(bUB,oVB)
cs.pop()
_(b3,bUB)
cs.push("./pages/index/index.wxml:view:1:1113")
var cZB=_n('view')
_rz(z,cZB,'class',38,e,s,gg)
var h1B=_v()
_(cZB,h1B)
cs.push("./pages/index/index.wxml:block:1:1148")
var o2B=function(o4B,c3B,l5B,gg){
cs.push("./pages/index/index.wxml:block:1:1148")
cs.push("./pages/index/index.wxml:video:1:1227")
var t7B=_mz(z,'video',['controls',-1,'bindplay',42,'class',1,'data-event-opts',2,'data-playingIndex',3,'id',4,'poster',5,'src',6],[],o4B,c3B,gg)
cs.pop()
_(l5B,t7B)
cs.pop()
return l5B
}
_wp('./pages/index/index.wxml:block:1:1148: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
h1B.wxXCkey=2
_2z(z,41,o2B,e,s,gg,h1B,'trailer','__i2__','')
cs.pop()
cs.pop()
_(b3,cZB)
cs.push("./pages/index/index.wxml:view:1:1477")
var e8B=_n('view')
_rz(z,e8B,'class',49,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1512")
var b9B=_n('view')
_rz(z,b9B,'class',50,e,s,gg)
cs.push("./pages/index/index.wxml:image:1:1543")
var o0B=_mz(z,'image',['class',51,'src',1],[],e,s,gg)
cs.pop()
_(b9B,o0B)
cs.push("./pages/index/index.wxml:view:1:1605")
var xAC=_n('view')
_rz(z,xAC,'class',53,e,s,gg)
var oBC=_oz(z,54,e,s,gg)
_(xAC,oBC)
cs.pop()
_(b9B,xAC)
cs.pop()
_(e8B,b9B)
cs.pop()
_(b3,e8B)
cs.push("./pages/index/index.wxml:view:1:1662")
var fCC=_n('view')
_rz(z,fCC,'class',55,e,s,gg)
var cDC=_v()
_(fCC,cDC)
cs.push("./pages/index/index.wxml:block:1:1700")
var hEC=function(cGC,oFC,oHC,gg){
cs.push("./pages/index/index.wxml:block:1:1700")
cs.push("./pages/index/index.wxml:view:1:1777")
var aJC=_n('view')
_rz(z,aJC,'class',59,cGC,oFC,gg)
cs.push("./pages/index/index.wxml:image:1:1810")
var tKC=_mz(z,'image',['class',60,'src',1],[],cGC,oFC,gg)
cs.pop()
_(aJC,tKC)
cs.push("./pages/index/index.wxml:view:1:1866")
var eLC=_n('view')
_rz(z,eLC,'class',62,cGC,oFC,gg)
cs.push("./pages/index/index.wxml:view:1:1892")
var bMC=_n('view')
_rz(z,bMC,'class',63,cGC,oFC,gg)
var oNC=_oz(z,64,cGC,oFC,gg)
_(bMC,oNC)
cs.pop()
_(eLC,bMC)
cs.push("./pages/index/index.wxml:trailer-stars:1:1940")
var xOC=_mz(z,'trailer-stars',['innerScore',65,'showNum',1],[],cGC,oFC,gg)
cs.pop()
_(eLC,xOC)
cs.push("./pages/index/index.wxml:view:1:2002")
var oPC=_n('view')
_rz(z,oPC,'class',67,cGC,oFC,gg)
var fQC=_oz(z,68,cGC,oFC,gg)
_(oPC,fQC)
cs.pop()
_(eLC,oPC)
cs.push("./pages/index/index.wxml:view:1:2054")
var cRC=_n('view')
_rz(z,cRC,'class',69,cGC,oFC,gg)
var hSC=_oz(z,70,cGC,oFC,gg)
_(cRC,hSC)
cs.pop()
_(eLC,cRC)
cs.pop()
_(aJC,eLC)
cs.push("./pages/index/index.wxml:view:1:2115")
var oTC=_mz(z,'view',['bindtap',71,'class',1,'data-event-opts',2,'data-gIndex',3],[],cGC,oFC,gg)
cs.push("./pages/index/index.wxml:image:1:2238")
var cUC=_mz(z,'image',['class',75,'src',1],[],cGC,oFC,gg)
cs.pop()
_(oTC,cUC)
cs.push("./pages/index/index.wxml:view:1:2302")
var oVC=_n('view')
_rz(z,oVC,'class',77,cGC,oFC,gg)
var lWC=_oz(z,78,cGC,oFC,gg)
_(oVC,lWC)
cs.pop()
_(oTC,oVC)
cs.push("./pages/index/index.wxml:view:1:2339")
var aXC=_mz(z,'view',['animation',79,'class',1],[],cGC,oFC,gg)
var tYC=_oz(z,81,cGC,oFC,gg)
_(aXC,tYC)
cs.pop()
_(oTC,aXC)
cs.pop()
_(aJC,oTC)
cs.pop()
_(oHC,aJC)
cs.pop()
return oHC
}
_wp('./pages/index/index.wxml:block:1:1700: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
cDC.wxXCkey=4
_2z(z,58,hEC,e,s,gg,cDC,'guess','gIndex','')
cs.pop()
cs.pop()
_(b3,fCC)
cs.pop()
_(r,b3)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
cs.push("./pages/me/me.wxml:view:1:1")
var b1C=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/me/me.wxml:view:1:45")
var o2C=_n('view')
_rz(z,o2C,'class',2,e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,3,e,s,gg)){x3C.wxVkey=1
cs.push("./pages/me/me.wxml:block:1:66")
cs.push("./pages/me/me.wxml:view:1:97")
var c6C=_n('view')
cs.push("./pages/me/me.wxml:navigator:1:103")
var h7C=_n('navigator')
_rz(z,h7C,'url',4,e,s,gg)
cs.push("./pages/me/me.wxml:image:1:137")
var o8C=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
cs.pop()
_(h7C,o8C)
cs.pop()
_(c6C,h7C)
cs.pop()
_(x3C,c6C)
cs.pop()
}
else{x3C.wxVkey=2
cs.push("./pages/me/me.wxml:block:1:221")
cs.push("./pages/me/me.wxml:view:1:236")
var c9C=_n('view')
cs.push("./pages/me/me.wxml:image:1:242")
var o0C=_mz(z,'image',['class',7,'src',1],[],e,s,gg)
cs.pop()
_(c9C,o0C)
cs.pop()
_(x3C,c9C)
cs.pop()
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,9,e,s,gg)){o4C.wxVkey=1
cs.push("./pages/me/me.wxml:block:1:315")
cs.push("./pages/me/me.wxml:view:1:346")
var lAD=_n('view')
_rz(z,lAD,'class',10,e,s,gg)
cs.push("./pages/me/me.wxml:view:1:373")
var aBD=_n('view')
_rz(z,aBD,'class',11,e,s,gg)
var tCD=_oz(z,12,e,s,gg)
_(aBD,tCD)
cs.pop()
_(lAD,aBD)
cs.push("./pages/me/me.wxml:view:1:424")
var eDD=_n('view')
_rz(z,eDD,'class',13,e,s,gg)
var bED=_oz(z,14,e,s,gg)
_(eDD,bED)
cs.pop()
_(lAD,eDD)
cs.pop()
_(o4C,lAD)
cs.pop()
}
else{o4C.wxVkey=2
cs.push("./pages/me/me.wxml:block:1:490")
cs.push("./pages/me/me.wxml:view:1:505")
var oFD=_n('view')
_rz(z,oFD,'class',15,e,s,gg)
cs.push("./pages/me/me.wxml:view:1:532")
var xGD=_n('view')
_rz(z,xGD,'class',16,e,s,gg)
cs.push("./pages/me/me.wxml:navigator:1:568")
var oHD=_n('navigator')
_rz(z,oHD,'url',17,e,s,gg)
var fID=_oz(z,18,e,s,gg)
_(oHD,fID)
cs.pop()
_(xGD,oHD)
cs.pop()
_(oFD,xGD)
cs.pop()
_(o4C,oFD)
cs.pop()
}
var f5C=_v()
_(o2C,f5C)
if(_oz(z,19,e,s,gg)){f5C.wxVkey=1
cs.push("./pages/me/me.wxml:block:1:659")
cs.push("./pages/me/me.wxml:view:1:690")
var cJD=_n('view')
_rz(z,cJD,'class',20,e,s,gg)
cs.push("./pages/me/me.wxml:image:1:715")
var hKD=_mz(z,'image',['class',21,'src',1],[],e,s,gg)
cs.pop()
_(cJD,hKD)
cs.pop()
_(f5C,cJD)
cs.pop()
}
x3C.wxXCkey=1
o4C.wxXCkey=1
f5C.wxXCkey=1
cs.pop()
_(b1C,o2C)
cs.pop()
_(r,b1C)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
cs.push("./pages/meFace/meFace.wxml:view:1:1")
var cMD=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/meFace/meFace.wxml:view:1:45")
var oND=_n('view')
_rz(z,oND,'class',2,e,s,gg)
cs.push("./pages/meFace/meFace.wxml:image:1:74")
var lOD=_mz(z,'image',['class',3,'id',1,'mode',2,'src',3],[],e,s,gg)
cs.pop()
_(oND,lOD)
cs.pop()
_(cMD,oND)
cs.push("./pages/meFace/meFace.wxml:view:1:165")
var aPD=_n('view')
_rz(z,aPD,'class',7,e,s,gg)
cs.push("./pages/meFace/meFace.wxml:view:1:186")
var tQD=_n('view')
_rz(z,tQD,'class',8,e,s,gg)
var eRD=_oz(z,9,e,s,gg)
_(tQD,eRD)
cs.pop()
_(aPD,tQD)
cs.pop()
_(cMD,aPD)
cs.push("./pages/meFace/meFace.wxml:view:1:275")
var bSD=_n('view')
_rz(z,bSD,'class',10,e,s,gg)
cs.push("./pages/meFace/meFace.wxml:view:1:304")
var oTD=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var xUD=_oz(z,14,e,s,gg)
_(oTD,xUD)
cs.pop()
_(bSD,oTD)
cs.push("./pages/meFace/meFace.wxml:view:1:432")
var oVD=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var fWD=_oz(z,18,e,s,gg)
_(oVD,fWD)
cs.pop()
_(bSD,oVD)
cs.pop()
_(cMD,bSD)
cs.pop()
_(r,cMD)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
cs.push("./pages/meInfo/meInfo.wxml:view:1:1")
var hYD=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:45")
var oZD=_n('view')
_rz(z,oZD,'class',2,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:80")
var c1D=_n('view')
_rz(z,c1D,'class',3,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:125")
var o2D=_n('view')
_rz(z,o2D,'class',4,e,s,gg)
var l3D=_oz(z,5,e,s,gg)
_(o2D,l3D)
cs.pop()
_(c1D,o2D)
cs.push("./pages/meInfo/meInfo.wxml:view:1:163")
var a4D=_n('view')
_rz(z,a4D,'class',6,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:image:1:190")
var t5D=_mz(z,'image',['bindtap',7,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
cs.pop()
_(a4D,t5D)
cs.push("./pages/meInfo/meInfo.wxml:view:1:321")
var e6D=_n('view')
_rz(z,e6D,'class',11,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:image:1:347")
var b7D=_mz(z,'image',['class',12,'src',1],[],e,s,gg)
cs.pop()
_(e6D,b7D)
cs.pop()
_(a4D,e6D)
cs.pop()
_(c1D,a4D)
cs.pop()
_(oZD,c1D)
cs.push("./pages/meInfo/meInfo.wxml:view:1:430")
var o8D=_n('view')
_rz(z,o8D,'class',14,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:453")
var x9D=_n('view')
_rz(z,x9D,'class',15,e,s,gg)
cs.pop()
_(o8D,x9D)
cs.pop()
_(oZD,o8D)
cs.push("./pages/meInfo/meInfo.wxml:view:1:486")
var o0D=_n('view')
_rz(z,o0D,'class',16,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:531")
var fAE=_n('view')
_rz(z,fAE,'class',17,e,s,gg)
var cBE=_oz(z,18,e,s,gg)
_(fAE,cBE)
cs.pop()
_(o0D,fAE)
cs.push("./pages/meInfo/meInfo.wxml:view:1:569")
var hCE=_n('view')
_rz(z,hCE,'class',19,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:596")
var oDE=_n('view')
_rz(z,oDE,'class',20,e,s,gg)
var cEE=_oz(z,21,e,s,gg)
_(oDE,cEE)
cs.pop()
_(hCE,oDE)
cs.push("./pages/meInfo/meInfo.wxml:view:1:652")
var oFE=_n('view')
_rz(z,oFE,'class',22,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:image:1:678")
var lGE=_mz(z,'image',['class',23,'src',1],[],e,s,gg)
cs.pop()
_(oFE,lGE)
cs.pop()
_(hCE,oFE)
cs.pop()
_(o0D,hCE)
cs.pop()
_(oZD,o0D)
cs.push("./pages/meInfo/meInfo.wxml:view:1:761")
var aHE=_n('view')
_rz(z,aHE,'class',25,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:784")
var tIE=_n('view')
_rz(z,tIE,'class',26,e,s,gg)
cs.pop()
_(aHE,tIE)
cs.pop()
_(oZD,aHE)
cs.push("./pages/meInfo/meInfo.wxml:view:1:817")
var eJE=_n('view')
_rz(z,eJE,'class',27,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:862")
var bKE=_n('view')
_rz(z,bKE,'class',28,e,s,gg)
var oLE=_oz(z,29,e,s,gg)
_(bKE,oLE)
cs.pop()
_(eJE,bKE)
cs.push("./pages/meInfo/meInfo.wxml:view:1:900")
var xME=_n('view')
_rz(z,xME,'class',30,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:927")
var oNE=_n('view')
_rz(z,oNE,'class',31,e,s,gg)
var fOE=_oz(z,32,e,s,gg)
_(oNE,fOE)
cs.pop()
_(xME,oNE)
cs.push("./pages/meInfo/meInfo.wxml:view:1:983")
var cPE=_n('view')
_rz(z,cPE,'class',33,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:image:1:1009")
var hQE=_mz(z,'image',['class',34,'src',1],[],e,s,gg)
cs.pop()
_(cPE,hQE)
cs.pop()
_(xME,cPE)
cs.pop()
_(eJE,xME)
cs.pop()
_(oZD,eJE)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1092")
var oRE=_n('view')
_rz(z,oRE,'class',36,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1115")
var cSE=_n('view')
_rz(z,cSE,'class',37,e,s,gg)
cs.pop()
_(oRE,cSE)
cs.pop()
_(oZD,oRE)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1148")
var oTE=_n('view')
_rz(z,oTE,'class',38,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1193")
var lUE=_n('view')
_rz(z,lUE,'class',39,e,s,gg)
var aVE=_oz(z,40,e,s,gg)
_(lUE,aVE)
cs.pop()
_(oTE,lUE)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1231")
var tWE=_n('view')
_rz(z,tWE,'class',41,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1258")
var eXE=_n('view')
_rz(z,eXE,'class',42,e,s,gg)
var bYE=_v()
_(eXE,bYE)
if(_oz(z,43,e,s,gg)){bYE.wxVkey=1
cs.push("./pages/meInfo/meInfo.wxml:block:1:1284")
cs.push("./pages/meInfo/meInfo.wxml:view:1:1321")
var oZE=_n('view')
var x1E=_oz(z,44,e,s,gg)
_(oZE,x1E)
cs.pop()
_(bYE,oZE)
cs.pop()
}
else{bYE.wxVkey=2
cs.push("./pages/meInfo/meInfo.wxml:block:1:1345")
var o2E=_v()
_(bYE,o2E)
if(_oz(z,45,e,s,gg)){o2E.wxVkey=1
cs.push("./pages/meInfo/meInfo.wxml:block:1:1360")
cs.push("./pages/meInfo/meInfo.wxml:view:1:1397")
var f3E=_n('view')
var c4E=_oz(z,46,e,s,gg)
_(f3E,c4E)
cs.pop()
_(o2E,f3E)
cs.pop()
}
else{o2E.wxVkey=2
cs.push("./pages/meInfo/meInfo.wxml:block:1:1421")
cs.push("./pages/meInfo/meInfo.wxml:view:1:1436")
var h5E=_n('view')
var o6E=_oz(z,47,e,s,gg)
_(h5E,o6E)
cs.pop()
_(o2E,h5E)
cs.pop()
}
o2E.wxXCkey=1
cs.pop()
}
bYE.wxXCkey=1
cs.pop()
_(tWE,eXE)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1478")
var c7E=_n('view')
_rz(z,c7E,'class',48,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:image:1:1504")
var o8E=_mz(z,'image',['class',49,'src',1],[],e,s,gg)
cs.pop()
_(c7E,o8E)
cs.pop()
_(tWE,c7E)
cs.pop()
_(oTE,tWE)
cs.pop()
_(oZD,oTE)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1587")
var l9E=_n('view')
_rz(z,l9E,'class',51,e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1610")
var a0E=_n('view')
_rz(z,a0E,'class',52,e,s,gg)
cs.pop()
_(l9E,a0E)
cs.pop()
_(oZD,l9E)
cs.pop()
_(hYD,oZD)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1650")
var tAF=_mz(z,'view',['class',53,'style',1],[],e,s,gg)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1702")
var eBF=_mz(z,'view',['bindtap',55,'class',1,'data-event-opts',2],[],e,s,gg)
var bCF=_oz(z,58,e,s,gg)
_(eBF,bCF)
cs.pop()
_(tAF,eBF)
cs.push("./pages/meInfo/meInfo.wxml:view:1:1822")
var oDF=_mz(z,'view',['bindtap',59,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var xEF=_oz(z,63,e,s,gg)
_(oDF,xEF)
cs.pop()
_(tAF,oDF)
cs.pop()
_(hYD,tAF)
cs.pop()
_(r,hYD)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
cs.push("./pages/movie/movie.wxml:view:1:1")
var fGF=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:35")
var cHF=_n('view')
_rz(z,cHF,'class',2,e,s,gg)
cs.push("./pages/movie/movie.wxml:video:1:56")
var hIF=_mz(z,'video',['controls',-1,'class',3,'id',1,'poster',2,'src',3],[],e,s,gg)
cs.pop()
_(cHF,hIF)
cs.pop()
_(fGF,cHF)
cs.push("./pages/movie/movie.wxml:view:1:178")
var oJF=_n('view')
_rz(z,oJF,'class',7,e,s,gg)
cs.push("./pages/movie/movie.wxml:navigator:1:203")
var cKF=_n('navigator')
_rz(z,cKF,'url',8,e,s,gg)
cs.push("./pages/movie/movie.wxml:image:1:266")
var oLF=_mz(z,'image',['class',9,'src',1],[],e,s,gg)
cs.pop()
_(cKF,oLF)
cs.pop()
_(oJF,cKF)
cs.push("./pages/movie/movie.wxml:view:1:335")
var lMF=_n('view')
_rz(z,lMF,'class',11,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:360")
var aNF=_n('view')
_rz(z,aNF,'class',12,e,s,gg)
var tOF=_oz(z,13,e,s,gg)
_(aNF,tOF)
cs.pop()
_(lMF,aNF)
cs.push("./pages/movie/movie.wxml:view:1:407")
var ePF=_n('view')
_rz(z,ePF,'class',14,e,s,gg)
var bQF=_oz(z,15,e,s,gg)
_(ePF,bQF)
cs.pop()
_(lMF,ePF)
cs.push("./pages/movie/movie.wxml:view:1:464")
var oRF=_n('view')
_rz(z,oRF,'class',16,e,s,gg)
var xSF=_oz(z,17,e,s,gg)
_(oRF,xSF)
cs.pop()
_(lMF,oRF)
cs.push("./pages/movie/movie.wxml:view:1:524")
var oTF=_n('view')
_rz(z,oTF,'class',18,e,s,gg)
var fUF=_oz(z,19,e,s,gg)
_(oTF,fUF)
cs.pop()
_(lMF,oTF)
cs.push("./pages/movie/movie.wxml:view:1:581")
var cVF=_n('view')
_rz(z,cVF,'class',20,e,s,gg)
var hWF=_oz(z,21,e,s,gg)
_(cVF,hWF)
cs.pop()
_(lMF,cVF)
cs.push("./pages/movie/movie.wxml:view:1:640")
var oXF=_n('view')
_rz(z,oXF,'class',22,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:666")
var cYF=_n('view')
_rz(z,cYF,'class',23,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:690")
var oZF=_n('view')
_rz(z,oZF,'class',24,e,s,gg)
var l1F=_oz(z,25,e,s,gg)
_(oZF,l1F)
cs.pop()
_(cYF,oZF)
cs.push("./pages/movie/movie.wxml:view:1:736")
var a2F=_n('view')
_rz(z,a2F,'class',26,e,s,gg)
var t3F=_oz(z,27,e,s,gg)
_(a2F,t3F)
cs.pop()
_(cYF,a2F)
cs.pop()
_(oXF,cYF)
cs.push("./pages/movie/movie.wxml:view:1:797")
var e4F=_n('view')
_rz(z,e4F,'class',28,e,s,gg)
var b5F=_v()
_(e4F,b5F)
if(_oz(z,29,e,s,gg)){b5F.wxVkey=1
cs.push("./pages/movie/movie.wxml:block:1:822")
cs.push("./pages/movie/movie.wxml:block:1:862")
cs.push("./pages/movie/movie.wxml:trailer-stars:1:869")
var o6F=_mz(z,'trailer-stars',['innerScore',30,'showNum',1],[],e,s,gg)
cs.pop()
_(b5F,o6F)
cs.pop()
cs.pop()
}
cs.push("./pages/movie/movie.wxml:view:1:963")
var x7F=_n('view')
_rz(z,x7F,'class',32,e,s,gg)
var o8F=_oz(z,33,e,s,gg)
_(x7F,o8F)
cs.pop()
_(e4F,x7F)
b5F.wxXCkey=1
b5F.wxXCkey=3
cs.pop()
_(oXF,e4F)
cs.pop()
_(lMF,oXF)
cs.pop()
_(oJF,lMF)
cs.pop()
_(fGF,oJF)
cs.push("./pages/movie/movie.wxml:view:1:1066")
var f9F=_n('view')
_rz(z,f9F,'class',34,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:1092")
var c0F=_n('view')
_rz(z,c0F,'class',35,e,s,gg)
cs.pop()
_(f9F,c0F)
cs.pop()
_(fGF,f9F)
cs.push("./pages/movie/movie.wxml:view:1:1125")
var hAG=_n('view')
_rz(z,hAG,'class',36,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:1151")
var oBG=_n('view')
_rz(z,oBG,'class',37,e,s,gg)
var cCG=_oz(z,38,e,s,gg)
_(oBG,cCG)
cs.pop()
_(hAG,oBG)
cs.push("./pages/movie/movie.wxml:view:1:1196")
var oDG=_n('view')
_rz(z,oDG,'class',39,e,s,gg)
var lEG=_oz(z,40,e,s,gg)
_(oDG,lEG)
cs.pop()
_(hAG,oDG)
cs.pop()
_(fGF,hAG)
cs.push("./pages/movie/movie.wxml:view:1:1259")
var aFG=_n('view')
_rz(z,aFG,'class',41,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:1286")
var tGG=_n('view')
_rz(z,tGG,'class',42,e,s,gg)
var eHG=_oz(z,43,e,s,gg)
_(tGG,eHG)
cs.pop()
_(aFG,tGG)
cs.push("./pages/movie/movie.wxml:scroll-view:1:1325")
var bIG=_mz(z,'scroll-view',['scrollX',-1,'class',44],[],e,s,gg)
var oJG=_v()
_(bIG,oJG)
cs.push("./pages/movie/movie.wxml:block:1:1367")
var xKG=function(fMG,oLG,cNG,gg){
cs.push("./pages/movie/movie.wxml:block:1:1367")
cs.push("./pages/movie/movie.wxml:view:1:1446")
var oPG=_n('view')
_rz(z,oPG,'class',48,fMG,oLG,gg)
cs.push("./pages/movie/movie.wxml:image:1:1473")
var cQG=_mz(z,'image',['class',49,'mode',1,'src',2],[],fMG,oLG,gg)
cs.pop()
_(oPG,cQG)
cs.push("./pages/movie/movie.wxml:view:1:1552")
var oRG=_n('view')
_rz(z,oRG,'class',52,fMG,oLG,gg)
var lSG=_oz(z,53,fMG,oLG,gg)
_(oRG,lSG)
cs.pop()
_(oPG,oRG)
cs.push("./pages/movie/movie.wxml:view:1:1601")
var aTG=_n('view')
_rz(z,aTG,'class',54,fMG,oLG,gg)
var tUG=_oz(z,55,fMG,oLG,gg)
_(aTG,tUG)
cs.pop()
_(oPG,aTG)
cs.pop()
_(cNG,oPG)
cs.pop()
return cNG
}
_wp('./pages/movie/movie.wxml:block:1:1367: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
oJG.wxXCkey=2
_2z(z,47,xKG,e,s,gg,oJG,'director','__i0__','')
cs.pop()
var eVG=_v()
_(bIG,eVG)
cs.push("./pages/movie/movie.wxml:block:1:1668")
var bWG=function(xYG,oXG,oZG,gg){
cs.push("./pages/movie/movie.wxml:block:1:1668")
cs.push("./pages/movie/movie.wxml:view:1:1741")
var c2G=_n('view')
_rz(z,c2G,'class',59,xYG,oXG,gg)
cs.push("./pages/movie/movie.wxml:image:1:1768")
var h3G=_mz(z,'image',['class',60,'mode',1,'src',2],[],xYG,oXG,gg)
cs.pop()
_(c2G,h3G)
cs.push("./pages/movie/movie.wxml:view:1:1844")
var o4G=_n('view')
_rz(z,o4G,'class',63,xYG,oXG,gg)
var c5G=_oz(z,64,xYG,oXG,gg)
_(o4G,c5G)
cs.pop()
_(c2G,o4G)
cs.push("./pages/movie/movie.wxml:view:1:1890")
var o6G=_n('view')
_rz(z,o6G,'class',65,xYG,oXG,gg)
var l7G=_oz(z,66,xYG,oXG,gg)
_(o6G,l7G)
cs.pop()
_(c2G,o6G)
cs.pop()
_(oZG,c2G)
cs.pop()
return oZG
}
_wp('./pages/movie/movie.wxml:block:1:1668: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
eVG.wxXCkey=2
_2z(z,58,bWG,e,s,gg,eVG,'actor','__i1__','')
cs.pop()
cs.pop()
_(aFG,bIG)
cs.pop()
_(fGF,aFG)
cs.push("./pages/movie/movie.wxml:view:1:1975")
var a8G=_n('view')
_rz(z,a8G,'class',67,e,s,gg)
cs.push("./pages/movie/movie.wxml:view:1:2002")
var t9G=_n('view')
_rz(z,t9G,'class',68,e,s,gg)
var e0G=_oz(z,69,e,s,gg)
_(t9G,e0G)
cs.pop()
_(a8G,t9G)
cs.push("./pages/movie/movie.wxml:scroll-view:1:2041")
var bAH=_mz(z,'scroll-view',['scrollX',-1,'class',70],[],e,s,gg)
var oBH=_v()
_(bAH,oBH)
cs.push("./pages/movie/movie.wxml:block:1:2083")
var xCH=function(fEH,oDH,cFH,gg){
cs.push("./pages/movie/movie.wxml:block:1:2083")
cs.push("./pages/movie/movie.wxml:image:1:2157")
var oHH=_mz(z,'image',['class',74,'mode',1,'src',2],[],fEH,oDH,gg)
cs.pop()
_(cFH,oHH)
cs.pop()
return cFH
}
_wp('./pages/movie/movie.wxml:block:1:2083: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
oBH.wxXCkey=2
_2z(z,73,xCH,e,s,gg,oBH,'img','__i2__','')
cs.pop()
cs.pop()
_(a8G,bAH)
cs.pop()
_(fGF,a8G)
cs.pop()
_(r,fGF)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
cs.push("./pages/registLogin/registLogin.wxml:view:1:1")
var oJH=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:form:1:35")
var lKH=_mz(z,'form',['bindreset',2,'bindsubmit',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:view:1:174")
var aLH=_n('view')
_rz(z,aLH,'class',5,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:image:1:200")
var tMH=_mz(z,'image',['class',6,'src',1],[],e,s,gg)
cs.pop()
_(aLH,tMH)
cs.pop()
_(lKH,aLH)
cs.push("./pages/registLogin/registLogin.wxml:view:1:265")
var eNH=_n('view')
_rz(z,eNH,'class',8,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:label:1:291")
var bOH=_n('label')
_rz(z,bOH,'class',9,e,s,gg)
var oPH=_oz(z,10,e,s,gg)
_(bOH,oPH)
cs.pop()
_(eNH,bOH)
cs.push("./pages/registLogin/registLogin.wxml:input:1:330")
var xQH=_mz(z,'input',['class',11,'name',1,'placeholder',2,'placeholderClass',3,'type',4,'value',5],[],e,s,gg)
cs.pop()
_(eNH,xQH)
cs.pop()
_(lKH,eNH)
cs.push("./pages/registLogin/registLogin.wxml:view:1:459")
var oRH=_mz(z,'view',['class',17,'style',1],[],e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:label:1:511")
var fSH=_n('label')
_rz(z,fSH,'class',19,e,s,gg)
var cTH=_oz(z,20,e,s,gg)
_(fSH,cTH)
cs.pop()
_(oRH,fSH)
cs.push("./pages/registLogin/registLogin.wxml:input:1:550")
var hUH=_mz(z,'input',['class',21,'name',1,'password',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(oRH,hUH)
cs.pop()
_(lKH,oRH)
cs.push("./pages/registLogin/registLogin.wxml:button:1:692")
var oVH=_mz(z,'button',['formType',28,'style',1,'type',2],[],e,s,gg)
var cWH=_oz(z,31,e,s,gg)
_(oVH,cWH)
cs.pop()
_(lKH,oVH)
cs.pop()
_(oJH,lKH)
cs.push("./pages/registLogin/registLogin.wxml:view:1:799")
var oXH=_n('view')
_rz(z,oXH,'class',32,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:view:1:826")
var lYH=_n('view')
_rz(z,lYH,'class',33,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:view:1:851")
var aZH=_n('view')
_rz(z,aZH,'class',34,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:view:1:877")
var t1H=_n('view')
_rz(z,t1H,'class',35,e,s,gg)
cs.pop()
_(aZH,t1H)
cs.pop()
_(lYH,aZH)
cs.push("./pages/registLogin/registLogin.wxml:view:1:910")
var e2H=_n('view')
_rz(z,e2H,'class',36,e,s,gg)
var b3H=_oz(z,37,e,s,gg)
_(e2H,b3H)
cs.pop()
_(lYH,e2H)
cs.push("./pages/registLogin/registLogin.wxml:view:1:964")
var o4H=_n('view')
_rz(z,o4H,'class',38,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:view:1:990")
var x5H=_n('view')
_rz(z,x5H,'class',39,e,s,gg)
cs.pop()
_(o4H,x5H)
cs.pop()
_(lYH,o4H)
cs.pop()
_(oXH,lYH)
cs.push("./pages/registLogin/registLogin.wxml:view:1:1030")
var o6H=_n('view')
_rz(z,o6H,'class',40,e,s,gg)
cs.push("./pages/registLogin/registLogin.wxml:image:1:1062")
var f7H=_mz(z,'image',['bindtap',41,'class',1,'data-event-opts',2,'data-logintype',3,'src',4],[],e,s,gg)
cs.pop()
_(o6H,f7H)
cs.push("./pages/registLogin/registLogin.wxml:image:1:1226")
var c8H=_mz(z,'image',['bindtap',46,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
cs.pop()
_(o6H,c8H)
cs.push("./pages/registLogin/registLogin.wxml:image:1:1413")
var h9H=_mz(z,'image',['bindtap',52,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
cs.pop()
_(o6H,h9H)
cs.pop()
_(oXH,o6H)
cs.pop()
_(oJH,oXH)
cs.pop()
_(r,oJH)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
cs.push("./pages/search/search.wxml:view:1:1")
var cAI=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/search/search.wxml:view:1:35")
var oBI=_n('view')
_rz(z,oBI,'class',2,e,s,gg)
cs.push("./pages/search/search.wxml:view:1:62")
var lCI=_n('view')
_rz(z,lCI,'class',3,e,s,gg)
cs.push("./pages/search/search.wxml:image:1:94")
var aDI=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
cs.pop()
_(lCI,aDI)
cs.pop()
_(oBI,lCI)
cs.push("./pages/search/search.wxml:input:1:165")
var tEI=_mz(z,'input',['bindconfirm',6,'class',1,'confirmType',2,'data-event-opts',3,'maxlength',4,'placeholder',5,'type',6],[],e,s,gg)
cs.pop()
_(oBI,tEI)
cs.pop()
_(cAI,oBI)
cs.push("./pages/search/search.wxml:view:1:356")
var eFI=_n('view')
_rz(z,eFI,'class',13,e,s,gg)
var bGI=_v()
_(eFI,bGI)
cs.push("./pages/search/search.wxml:block:1:393")
var oHI=function(oJI,xII,fKI,gg){
cs.push("./pages/search/search.wxml:block:1:393")
cs.push("./pages/search/search.wxml:view:1:469")
var hMI=_n('view')
_rz(z,hMI,'class',17,oJI,xII,gg)
cs.push("./pages/search/search.wxml:image:1:496")
var oNI=_mz(z,'image',['bindtap',18,'class',1,'data-event-opts',2,'data-trailerId',3,'src',4],[],oJI,xII,gg)
cs.pop()
_(hMI,oNI)
cs.pop()
_(fKI,hMI)
cs.pop()
return fKI
}
_wp('./pages/search/search.wxml:block:1:393: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
bGI.wxXCkey=2
_2z(z,16,oHI,e,s,gg,bGI,'trailer','__i0__','')
cs.pop()
cs.pop()
_(cAI,eFI)
cs.pop()
_(r,cAI)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"page{ width: 100%; height: 100%; background-color: #f7f7f7; }\n.",[1],"page-block{ background-color: #ffffff; }\n.",[1],"line-wapper{ padding: 0 ",[0,20],";}\n.",[1],"line{ height: 1px; background-color: #dbdbdb;}\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['componente/helloComp.wxss']=setCssToHead([".",[1],"txt{ color: aquamarine;}\n",],undefined,{path:"./componente/helloComp.wxss"});    
__wxAppCode__['componente/helloComp.wxml']=$gwx('./componente/helloComp.wxml');

__wxAppCode__['componente/trailerStars.wxss']=setCssToHead([".",[1],"txt{ color: aquamarine;}\n.",[1],"movie-score-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"star-icon{ width: ",[0,20],"; height: ",[0,20],"; margin-top: ",[0,8],"; }\n.",[1],"movie-score{ font-size: 12px; color: gray; margin-top: ",[0,5],";}\n",],undefined,{path:"./componente/trailerStars.wxss"});    
__wxAppCode__['componente/trailerStars.wxml']=$gwx('./componente/trailerStars.wxml');

__wxAppCode__['pages/cover/cover.wxss']=setCssToHead([".",[1],"black { background-color: #000000; width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; position: fixed; }\n.",[1],"cover { -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n",],undefined,{path:"./pages/cover/cover.wxss"});    
__wxAppCode__['pages/cover/cover.wxml']=$gwx('./pages/cover/cover.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"carousel { width: 100%; height: ",[0,400],"; }\n.",[1],"imgs1 { width: 100%; height: ",[0,400],"; }\n.",[1],"imgs2 { width: ",[0,200],"; height: ",[0,200],"; }\n.",[1],"super-hot { margin-top: ",[0,12],"; padding: ",[0,20],"; }\n.",[1],"hot-title-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"hot-icon { width: ",[0,30],"; height: ",[0,30],"; margin-top: ",[0,15],"; }\n.",[1],"hot-title { font-size: 20px; margin-left: ",[0,20],"; font-weight: 700; }\n.",[1],"hot { width: 100%; white-space: nowrap; }\n.",[1],"single-poster { display: inline-block; margin-left: ",[0,20],"; }\n.",[1],"poster-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"poster { width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movie-name { width: ",[0,200],"; margin-top: ",[0,10],"; font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"hot-movie { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; }\n.",[1],"hot-movie-single { width: ",[0,350],"; height: ",[0,220],"; margin-top: ",[0,10],"; }\n.",[1],"guess-u-like { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"single-like-movie { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,30]," ",[0,20],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"like-movie { width: ",[0,180],"; height: ",[0,240],"; border-radius: 5%; }\n.",[1],"movie-desc { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: ",[0,340],"; }\n.",[1],"movie-title { white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"movie-info { color: #808080; font-size: 14px; }\n.",[1],"movie-oper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,140],"; border-left: 2px #dbdbdb dashed; }\n.",[1],"praise-ico{ width: ",[0,40],";height: ",[0,40],";-webkit-align-self: center;-ms-flex-item-align: center;align-self: center;}\n.",[1],"praise-me{ font-size: 14px; color:green;-webkit-align-self: center;-ms-flex-item-align: center;align-self: center;}\n.",[1],"animation-opacity { font-weight: 700; opacity: 0;}\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=setCssToHead([".",[1],"page-fill{}\n.",[1],"header{ padding: ",[0,120]," ",[0,30]," ",[0,40]," ",[0,30],"; background-color: #ffd655; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient:horizontal; -webkit-box-direction:normal; -webkit-flex-direction:row ; -ms-flex-direction:row ; flex-direction:row ; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face{ width: ",[0,120],"; height: ",[0,120],"; border-radius: 50%; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; }\n.",[1],"info-wapper{ width: 80%; margin-left: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"nickname{ color:#6a5018 ; font-size: 18px; font-weight: 700;}\n.",[1],"regist-login{ margin-left: ",[0,60],"; margin-top: ",[0,30],"; }\n.",[1],"nav-info{ color:#a38e62 ; font-size: 14px; margin-top: ",[0,10],";}\n.",[1],"set-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient:horizontal; -webkit-box-direction:normal; -webkit-flex-direction:row ; -ms-flex-direction:row ; flex-direction:row ; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; width: 15%; }\n.",[1],"settings{ width: ",[0,40],"; height: ",[0,40],"; }\n",],undefined,{path:"./pages/me/me.wxss"});    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/meFace/meFace.wxss']=setCssToHead([".",[1],"page-fill { width:100%; height: 100%; position: absolute; background: black; }\n.",[1],"pending-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,40],"; }\n.",[1],"pending-face { width: ",[0,600],"; height: ",[0,600],"; }\n.",[1],"notice { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"notice-words { color: gray; font-size: 13px; margin-top: ",[0,30],"; width: ",[0,600],"; }\n.",[1],"footer-opertor { position: fixed; bottom: 0; border-top: #515050 solid 1px; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,30],"; }\n.",[1],"opertor-words { color: #e8e5e5; font-size: 16px; width: ",[0,200],"; }\n",],undefined,{path:"./pages/meFace/meFace.wxss"});    
__wxAppCode__['pages/meFace/meFace.wxml']=$gwx('./pages/meFace/meFace.wxml');

__wxAppCode__['pages/meInfo/meInfo.wxss']=setCssToHead([".",[1],"page-fill{ width: 100%; height: 100%; position: absolute; }\n.",[1],"info-list{ padding: 0 ",[0,30],"; }\n.",[1],"info-words{ color:#333333; font-size: 16px; width: 25%; line-height: ",[0,80],"; }\n.",[1],"face{ width: ",[0,80],"; height: ",[0,80],"; border-radius: 50%; }\n.",[1],"arrow-block{ margin-left: ",[0,10],"; line-height: ",[0,80],"; }\n.",[1],"arrow-ico{ width: ",[0,30],"; height: ",[0,30],"; }\n.",[1],"item-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face-line-upbottom{ margin-top: ",[0,20],"; padding-top: ",[0,20],"; pos-bottom: ",[0,20],"; }\n.",[1],"line-top{}\n.",[1],"right-wapper{ width: 80%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"gray-fields{ font-size: 14px; color: darkgray; line-height: ",[0,80],"; }\n.",[1],"foot-wapper{ position:fixed; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; }\n.",[1],"foot-words{ text-align: center; background: white; padding: ",[0,20],"; color: #333333; font-size: 16px }\n",],undefined,{path:"./pages/meInfo/meInfo.wxss"});    
__wxAppCode__['pages/meInfo/meInfo.wxml']=$gwx('./pages/meInfo/meInfo.wxml');

__wxAppCode__['pages/movie/movie.wxss']=setCssToHead([".",[1],"player { background: black; }\n.",[1],"movie { width: 100%; height: ",[0,440],"; }\n.",[1],"movie-info { padding: ",[0,40]," ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; background-color: #f7f4f9; }\n.",[1],"cover { width: ",[0,280],"; height: ",[0,380],"; }\n.",[1],"movie-desc { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,30],"; width: ",[0,400],"; }\n.",[1],"title { font-size: 30px; }\n.",[1],"basic-info { color: darkgray; font-size: 13px; line-height: ",[0,36],"; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"score-block { background-color: #ffffff; margin-top: ",[0,20],"; width: ",[0,360],"; height: ",[0,90],"; padding: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-shadow: 3px 2px 10px #dedede; box-shadow: 3px 2px 10px #dedede; }\n.",[1],"score-words { font-size: 12px; color: gray; }\n.",[1],"movie-score { font-size: 26px; font-weight: 700; margin-left: ",[0,8],"; color: #feab2a; line-height: ",[0,60],"; }\n.",[1],"praise-counts{ font-size: 12px; color: grey; line-height: ",[0,44],"; }\n.",[1],"plots-block{ background-color: #F7F4F9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"plots-title{ color: #A9A9A9; font-size: 14px; }\n.",[1],"plots-desc{ margin-top: ",[0,10],"; font-size: 14px; }\n.",[1],"scroll-block{ background-color: #F7F4F9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"scroll-list{ width: 100%; white-space: nowrap; margin-top: ",[0,20],"; }\n.",[1],"plot-image{ width: ",[0,220],"; height: ",[0,320],"; margin-right: ",[0,10],";}\n.",[1],"single-actor{ width: ",[0,170],"; height:",[0,240],"; margin-right: ",[0,10],";}\n.",[1],"actor-wapper{ display: inline-block;}\n.",[1],"actor-name{ width: ",[0,170],";text-align: center; font-size: 15px; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden;}\n.",[1],"actor-role{width: ",[0,170],"; text-align: center; font-size: 15px;}\n",],undefined,{path:"./pages/movie/movie.wxss"});    
__wxAppCode__['pages/movie/movie.wxml']=$gwx('./pages/movie/movie.wxml');

__wxAppCode__['pages/registLogin/registLogin.wxss']=setCssToHead([".",[1],"body{ border-top:1px solid #dbdbda ; padding: 0 ",[0,40],"; }\n.",[1],"face-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,120],"; margin-bottom: ",[0,120],"; }\n.",[1],"face{ width: ",[0,160],"; height: ",[0,160],"; }\n.",[1],"info-wapper{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-bottom: 1px solid #dbdbda; padding-bottom: ",[0,20],"; }\n.",[1],"word-lbl{ color: #808080; }\n.",[1],"input{ width: ",[0,500],";margin-left: ",[0,40],";}\n.",[1],"graywords{ color: #eaeaea;}\n.",[1],"third-wapper { width: 100%; margin-top: ",[0,60],"; }\n.",[1],"third-line { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"third-words { color: #A9A9A9; font-size: 13px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"single-line { padding: ",[0,15]," ",[0,20],"; width: 25%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"third-icos-wapper { margin-top: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"third-ico { width: ",[0,60],"; height: ",[0,60],"; }\n.",[1],"third-btn-ico { background-image:url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png); width: ",[0,60],"; height: ",[0,60],"; background-color: white; background-size: ",[0,60]," ",[0,60],"; background-repeat:no-repeat; border:none; padding: 0; }\nwx-button::after{ border: none; }\n",],undefined,{path:"./pages/registLogin/registLogin.wxss"});    
__wxAppCode__['pages/registLogin/registLogin.wxml']=$gwx('./pages/registLogin/registLogin.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"search-ico { width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"search-text { font-size: 14px; background-color: #eaeaea; height: ",[0,60],"; width: ",[0,650],"; }\n.",[1],"search-block { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: 0 ",[0,20]," ",[0,20]," ",[0,20],"; position: fixed; z-index: 1000; background-color: #f8f8f8; top:100; width: 100%; }\n.",[1],"search-ico-wapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding: 0 ",[0,10],"; background-color: #eaeaea; }\n.",[1],"poster { width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movie-list{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,100]," ",[0,10]," 0 ",[0,10],"; }\n.",[1],"movie-wapper{ padding: ",[0,10]," ",[0,20],";}\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        plus.webview.postMessageToUniNView({
            type: 'UniWebviewReady-' + plus.webview.currentWebview().id
        }, '__uniapp__service');
})();
