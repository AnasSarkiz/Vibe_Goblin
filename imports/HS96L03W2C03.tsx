import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["GND"],
	pin2: ["VCC"],
	pin3: ["SCL"],
	pin4: ["SDA"],
} as const;

export const HS96L03W2C03 = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C5248080"],
			}}
			manufacturerPartNumber="HS96L03W2C03"
			footprint={
				<footprint>
					<hole
						pcbX="-11.649964mm"
						pcbY="11.1948659mm"
						diameter="2.5000204mm"
					/>
					<hole pcbX="11.649964mm" pcbY="11.1948659mm" diameter="2.5000204mm" />
					<hole
						pcbX="-11.649964mm"
						pcbY="-12.6049341mm"
						diameter="2.5000204mm"
					/>
					<hole
						pcbX="11.649964mm"
						pcbY="-12.6049341mm"
						diameter="2.5000204mm"
					/>
					<platedhole
						portHints={["pin1"]}
						pcbX="-3.81mm"
						pcbY="11.7549359mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.0499852mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin2"]}
						pcbX="-1.27mm"
						pcbY="11.7549359mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.0499852mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin3"]}
						pcbX="1.27mm"
						pcbY="11.7549359mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.0499852mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin4"]}
						pcbX="3.81mm"
						pcbY="11.7549359mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.0499852mm"
						shape="circle"
					/>
					<silkscreenpath
						route={[
							{ x: -13.599160000000097, y: 13.194607899999937 },
							{ x: 13.59915999999987, y: 13.194607899999937 },
							{ x: 13.59915999999987, y: -14.605692100000056 },
							{ x: 6.499859999999785, y: -14.605692100000056 },
							{ x: 6.499859999999785, y: -10.854112100000066 },
							{ x: -6.350000000000136, y: -10.854112100000066 },
							{ x: -6.350000000000136, y: -14.605692100000056 },
							{ x: -13.599160000000097, y: -14.605692100000056 },
							{ x: -13.599160000000097, y: 13.194607899999937 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0.0127mm"
						pcbY="14.3317679mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -13.966000000000122, y: 13.581767899999932 },
							{ x: 13.991399999999771, y: 13.581767899999932 },
							{ x: 13.991399999999771, y: -15.036032100000057 },
							{ x: -13.966000000000122, y: -15.036032100000057 },
							{ x: -13.966000000000122, y: 13.581767899999932 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C5248080.obj?uuid=c6b423183c2f4cf5a163f75f8ad52fae",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C5248080.step?uuid=c6b423183c2f4cf5a163f75f8ad52fae",
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: 0.9050083000000768, z: 2.38 },
			}}
			{...props}
		/>
	);
};
