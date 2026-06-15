import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
} as const;

export const LCM04084521_B1 = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C2992359"],
			}}
			manufacturerPartNumber="LCM04084521_B1"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin2"]}
						pcbX="1.3499973mm"
						pcbY="0mm"
						width="1.8999962mm"
						height="2.999994mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="-1.3499973mm"
						pcbY="0mm"
						width="1.8999962mm"
						height="2.999994mm"
						shape="rect"
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.0127127mm"
						pcbY="8.309993mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -2.561412700000119, y: 7.559992999999963 },
							{ x: 2.5359872999998743, y: 7.559992999999963 },
							{ x: 2.5359872999998743, y: -4.547806999999921 },
							{ x: -2.561412700000119, y: -4.547806999999921 },
							{ x: -2.561412700000119, y: 7.559992999999963 },
						]}
					/>
				</footprint>
			}
			{...props}
		/>
	);
};
