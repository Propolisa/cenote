import { ModuleScope, Declaration, FunctionInvocation } from "../codegen/wgsl_template_engine.js"


class GameEntityClass {
	constructor({ id, name }) {
		this.id = id
		this.name = name || id


	}
}
class BlastZone extends GameEntityClass {
	constructor({ id, name }) {
		super(...arguments)
	}
}

ModuleScope({
	children: [
		GRAD_FUNC,
		new Declaration("const", "test",
			new FunctionInvocation(GRAD_FUNC, { test: "1.0", type: "3.0", tex: "uniforms.[0]" })
		)
	]
})
