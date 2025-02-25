/** WGSL CONSTANTS */
import { deepMerge } from "@std/collections";

const bool = "bool"
const f16 = "f16"
const f32 = "f32"
const i32 = "i32"
const sampler = "sampler"
const sampler_comparison = "sampler_comparison"
const texture_depth_2d = "texture_depth_2d"
const texture_depth_2d_array = "texture_depth_2d_array"
const texture_depth_cube = "texture_depth_cube"
const texture_depth_cube_array = "texture_depth_cube_array"
const texture_depth_multisampled_2d = "texture_depth_multisampled_2d"
const texture_external = "texture_external"
const u32 = "u32"
const array = "array"
const atomic = "atomic"
const mat2x2 = "mat2x2"
const mat2x3 = "mat2x3"
const mat2x4 = "mat2x4"
const mat3x2 = "mat3x2"
const mat3x3 = "mat3x3"
const mat3x4 = "mat3x4"
const mat4x2 = "mat4x2"
const mat4x3 = "mat4x3"
const mat4x4 = "mat4x4"
const ptr = "ptr"
const texture_1d = "texture_1d"
const texture_2d = "texture_2d"
const texture_2d_array = "texture_2d_array"
const texture_3d = "texture_3d"
const texture_cube = "texture_cube"
const texture_cube_array = "texture_cube_array"
const texture_multisampled_2d = "texture_multisampled_2d"
const texture_storage_1d = "texture_storage_1d"
const texture_storage_2d = "texture_storage_2d"
const texture_storage_2d_array = "texture_storage_2d_array"
const texture_storage_3d = "texture_storage_3d"
const vec2 = "vec2"
const vec3 = "vec3"
const vec4 = "vec4"
const vec2i = "vec2i"
const vec3i = "vec3i"
const vec4i = "vec4i"
const vec2u = "vec2u"
const vec3u = "vec3u"
const vec4u = "vec4u"
const vec2f = "vec2f"
const vec3f = "vec3f"
const vec4f = "vec4f"
const vec2h = "vec2h"
const vec3h = "vec3h"
const vec4h = "vec4h"


function wrapWith(s, chars = "()") {
	return (chars.length == 2) ? chars[0] + s + chars[1] : s
}
function getDefaultValueForType(wgsl_type) {
	switch (wgsl_type) {
		case "bool": return "false";
		case "f16": return "0.0h";
		case "f32": return "0.0";
		case "i32": return "0";
		case "u32": return "0u";
		case "sampler": return "sampler()";  // Placeholder value, might need adjustment based on context
		case "sampler_comparison": return "sampler_comparison()";  // Placeholder value
		case "texture_depth_2d": return "texture_depth_2d()";  // Placeholder value
		case "texture_depth_2d_array": return "texture_depth_2d_array()";  // Placeholder value
		case "texture_depth_cube": return "texture_depth_cube()";  // Placeholder value
		case "texture_depth_cube_array": return "texture_depth_cube_array()";  // Placeholder value
		case "texture_depth_multisampled_2d": return "texture_depth_multisampled_2d()";  // Placeholder value
		case "texture_external": return "texture_external()";  // Placeholder value
		case "array": return "array()";  // Placeholder value
		case "atomic": return "atomic(0)";  // Placeholder value
		case "mat2x2": return "mat2x2<f32>()";
		case "mat2x3": return "mat2x3<f32>()";
		case "mat2x4": return "mat2x4<f32>()";
		case "mat3x2": return "mat3x2<f32>()";
		case "mat3x3": return "mat3x3<f32>()";
		case "mat3x4": return "mat3x4<f32>()";
		case "mat4x2": return "mat4x2<f32>()";
		case "mat4x3": return "mat4x3<f32>()";
		case "mat4x4": return "mat4x4<f32>()";
		case "ptr": return "ptr()";  // Placeholder value
		case "texture_1d": return "texture_1d()";  // Placeholder value
		case "texture_2d": return "texture_2d()";  // Placeholder value
		case "texture_2d_array": return "texture_2d_array()";  // Placeholder value
		case "texture_3d": return "texture_3d()";  // Placeholder value
		case "texture_cube": return "texture_cube()";  // Placeholder value
		case "texture_cube_array": return "texture_cube_array()";  // Placeholder value
		case "texture_multisampled_2d": return "texture_multisampled_2d()";  // Placeholder value
		case "texture_storage_1d": return "texture_storage_1d()";  // Placeholder value
		case "texture_storage_2d": return "texture_storage_2d()";  // Placeholder value
		case "texture_storage_2d_array": return "texture_storage_2d_array()";  // Placeholder value
		case "texture_storage_3d": return "texture_storage_3d()";  // Placeholder value
		case "vec2": return "vec2<f32>()";
		case "vec3": return "vec3<f32>()";
		case "vec4": return "vec4<f32>()";
		case "vec2i": return "vec2<i32>()";
		case "vec3i": return "vec3<i32>()";
		case "vec4i": return "vec4<i32>()";
		case "vec2u": return "vec2<u32>()";
		case "vec3u": return "vec3<u32>()";
		case "vec4u": return "vec4<u32>()";
		case "vec2f": return "vec2<f32>()";
		case "vec3f": return "vec3<f32>()";
		case "vec4f": return "vec4<f32>()";
		case "vec2h": return "vec2<f16>()";
		case "vec3h": return "vec3<f16>()";
		case "vec4h": return "vec4<f16>()";
		default:
			throw new Error("Unknown WGSL type: " + wgsl_type);
	}
}

function eof(strings, ...values) {
	// Join the strings and values together
	let rawString = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');

	// Split the string into lines
	let lines = rawString.split('\n');

	// If the string is not empty, determine the base indentation
	if (lines.length > 1) {
		const baseIndentMatch = lines[1].match(/^(\s+)/);
		if (baseIndentMatch) {
			const baseIndent = baseIndentMatch[1];

			// Remove the base indentation from all subsequent lines
			lines = lines.map(line => {
				if (line.startsWith(baseIndent)) {
					return line.slice(baseIndent.length);
				}
				return line;
			});
		}
	}

	// Join the lines back together and trim any leading/trailing whitespace
	return lines.join('\n').trim();
}

function stringifySelf(child) { return child.toString() }

class _Scope {
	constructor({ children, meta }, opts) {
		if (!Array.isArray(children)) [
			children = [arguments[0]]
		]
		this.children = children
	}

	toString() {
		return this.children.map(stringifySelf).join("\n")
	}
}

class _Function {
	constructor({ name, signature = {}, body, ret_type }) {
		this.name = name
		this.ret_type = ret_type
		this.signature = !(signature instanceof FunctionSignature) ? new FunctionSignature(signature) : signature
		if (typeof body === "string") {
			this.children = [body]
		} else { this.children = body }
	}

	extend(constructor_args) {
		return new _Function(deepMerge(this, constructor_args))
	}

	callWithArgs(args) {
		let res_items = []
		Object.entries(this.signature.args).forEach(([name, config]) => {

			let { default_value, optional, type } = config
			let provided_value = args[name]
			if (provided_value === undefined) {
				if (!optional) {
					console.warn(`No value provided for non-optional parameter '${name}' in function ${this.name}()`)
					return
				} else {
					if (default_value === undefined) {
						return
					} else {
						provided_value = default_value
					}
				}
			}
			if (provided_value !== undefined) res_items.push(provided_value)
		})
		return res_items.join(", ")
	}
	toString() {
		return /*wgsl*/eof`
		fn ${this.name}(${this.signature}) -> ${this.ret_type} {
		${new _IndentedScope(this.children)}
		}`
	}
}




class FunctionArg {
	constructor({ name, type, optional = false, default_value }) {
		this.name = name
		this.type = type
		this.optional = optional
		this.default_value = default_value ?? optional ? getDefaultValueForType(this.type) : undefined // defaults optional floats to 0.0

	}

}

class FlatDataStructure {
	constructor(structure_name, args) {
		this.name = structure_name
		this.args = {}
		Object.entries(args).forEach(([name, plain_type_or_config]) => {
			if (typeof plain_type_or_config === "string") {
				this.args[name] = new FunctionArg({ name, type: plain_type_or_config })
			} else if (typeof plain_type_or_config === "object" && plain_type_or_config !== null) {
				this.args[name] = new FunctionArg(plain_type_or_config)
			}
		})
		this.children = Object.entries(this.args).map(([name, config]) => {
			return `${name}: ${config.type}`
		})
		this.toString = function () {
			return `struct ${structure_name || "[[NO_NAME_GIVEN]]"} ${wrapWith("{}", new _IndentedScope(this.children))}`
		}
		return this
	}
}

console.log(new FlatDataStructure({
	test: "f32",
	type: "f32",
	tex: "texture2d",
}))

class FunctionSignature extends FlatDataStructure {
	constructor(args) {
		super(null, args)
		this.toString = function () {
			return this.children.join(", ")
		}
		return this
	}
}






class _FunctionScope extends _Scope {
	constructor({ children, name, description }) {
		super(...arguments)
		this.name = name
		this.description = description
	}
}



class _ModuleScope extends _Scope {
	constructor({ children, name, description }) {
		super(...arguments)
		this.name = name
		this.description = description
	}
}

class _IndentedScope extends _Scope {
	constructor() {
		super(...arguments)
	}

	toString() {
		return super.toString().split("\n").map(e => "  " + e).join("\n")
	}
}


export class FunctionInvocation {
	constructor(function_instance, args) {
		this.function_instance = function_instance
		this.args = args
	}

	toString() {
		return `${this.function_instance.name}(${this.function_instance.callWithArgs(this.args)})`
	}
}

export class Declaration {
	constructor(decl_type, name, expr, { var_type } = {}) {
		this.decl_type = decl_type
		this.name = name
		this.expr = expr
		this.var_type = var_type
	}

	toString() {
		return `${this.decl_type} ${this.name}${this.var_type ? " : " + this.var_type : ""} = ${this.expr};`
	}
}

function _const(name, expr) {
	return new Declaration("const", name, expr)
}

function _let(name, expr) {
	return new Declaration("let", name, expr)
}

function _var(name, expr) {
	return new Declaration("var", name, expr)
}

let GRAD_FUNC = Function({
	name: "grad",
	signature: {
		test: "f32",
		type: "f32",
		tex: "texture2d",
	},
	ret_type: "vec3<f32>",
	body:
		eof`
			let cube: vec3<f32> = fract(vec3<f32>(hash / 1.0, hash / 2.0, hash / 4.0)) * 2.0 - 1.0;
			var cuboct: vec3<f32> = cube;
			cuboct[i32(hash / 16.0)] = 0.0;
			let type_: f32 = fract(hash / 8.0);
			let rhomb: vec3<f32> = (1.0 - type_) * cube + type_ * (cuboct + cross(cube, cuboct));
			var grad: vec3<f32> = cuboct * 1.22474487139 + rhomb;
			grad *= (1.0 - 0.042942436724648037 * type_) * 3.5946317686139184;
			return grad;`



})

/*
 * Example WGSL function
 * 
 * // Computes a gradient based on a hash
 * fn grad(hash: f32) -> vec3<f32> {
 *     let cube: vec3<f32> = fract(vec3<f32>(hash / 1.0, hash / 2.0, hash / 4.0)) * 2.0 - 1.0;
 *     var cuboct: vec3<f32> = cube;
 *     cuboct[i32(hash / 16.0)] = 0.0;
 * 
 *     let type_: f32 = fract(hash / 8.0);
 *     let rhomb: vec3<f32> = (1.0 - type_) * cube + type_ * (cuboct + cross(cube, cuboct));
 *     var grad: vec3<f32> = cuboct * 1.22474487139 + rhomb;
 *     grad *= (1.0 - 0.042942436724648037 * type_) * 3.5946317686139184;
 * 
 *     return grad;
}

 */




/**
 * @param {_Function} FunctionTemplate 
 * @returns {_Function}
 */
export function Function(FunctionTemplate) { return new _Function(...arguments) }

/**
 * @param {_Scope} ScopeTemplate 
 * @returns {_Scope}
 */
export function Scope(ScopeTemplate) { return new _Scope(...arguments) }

/**
 * @param {_IndentedScope} IndentedScopeTemplate 
 * @returns {_IndentedScope}
 */
export function IndentedScope(IndentedScopeTemplate) { return new _IndentedScope(...arguments) }

/**
 * @param {_ModuleScope} ModuleScopeTemplate 
 * @returns {_ModuleScope}
 */
export function ModuleScope(ModuleScopeTemplate) { return new _ModuleScope(...arguments) }



const EXAMPLE = ModuleScope({
	children: [
		GRAD_FUNC,
		new Declaration("const", "test",
			new FunctionInvocation(GRAD_FUNC, { test: "1.0", type: "3.0", tex: "uniforms.[0]" })
		)
	]
})
