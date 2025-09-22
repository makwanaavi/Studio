import React from "react";

const services = [
	{
		title: "Portrait Sessions",
		desc: "Our portrait sessions are designed to showcase your personality and style in stunning imagery.",
	},
	{
		title: "Maternity Sessions",
		desc: "Embrace the beauty and miracle of new life with our maternity and newborn photography sessions.",
	},
	{
		title: "Family Sessions",
		desc: "Cherish the bond of family with our custom-designed playful candid moments and portrait sessions.",
	},
];

export default function Services() {
	return (
		<section
			id="service"
			className="service-bg bg-black text-white py-20 px-4 relative overflow-hidden"
		>
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-yellow-500">
					~ SERVICES ~
				</h2>

				<p className="max-w-3xl mx-auto text-gray-300 mb-12 leading-relaxed">
					At Capturer, we offer a range of professional photography services
					tailored to meet your unique needs. With a commitment to excellence and
					creativity, we strive to exceed your expectations.
				</p>

				<div className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-8">
					{services.map((s, i) => (
						<div
							key={i}
							className="bg-white/5 border border-white/6 rounded-lg p-6 md:p-8 text-left transition-transform hover:scale-[1.02] hover:bg-white/8"
						>
							<h4 className="text-2xl md:text-2xl font-medium text-white mb-3 relative">
								{s.title}
								<span className="block w-10 h-0.5 bg-yellow-500 mt-3"></span>
							</h4>
							<p className="text-gray-300 leading-7">{s.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
