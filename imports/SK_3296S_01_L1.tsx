import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
	pin3: ["pin3"],
	pin4: ["pin4"],
	pin5: ["pin5"],
	pin6: ["pin6"],
	pin7: ["pin7"],
} as const;

export const SK_3296S_01_L1 = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C319020"],
			}}
			manufacturerPartNumber="SK_3296S_01_L1"
			footprint={
				<footprint>
					<hole pcbX="-1.49987mm" pcbY="-0.5589778mm" diameter="0.9000236mm" />
					<hole pcbX="1.500124mm" pcbY="-0.5589778mm" diameter="0.9000236mm" />
					<smtpad
						portHints={["pin4"]}
						pcbX="-3.800094mm"
						pcbY="-1.6590518mm"
						width="0.999998mm"
						height="0.999998mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="3.800094mm"
						pcbY="-1.6590518mm"
						width="0.999998mm"
						height="0.999998mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="-3.800094mm"
						pcbY="0.5410962mm"
						width="0.999998mm"
						height="0.999998mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="3.800094mm"
						pcbY="0.5410962mm"
						width="0.999998mm"
						height="0.999998mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="-2.249932mm"
						pcbY="1.4590522mm"
						width="0.999998mm"
						height="1.3999972mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="0.750062mm"
						pcbY="1.4590522mm"
						width="0.999998mm"
						height="1.3999972mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="2.249932mm"
						pcbY="1.4590522mm"
						width="0.999998mm"
						height="1.3999972mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 1.506651799999986, y: -2.0829778000000942 },
							{ x: 1.506651799999986, y: -3.431971800000042 },
							{ x: 0.1990089999999327, y: -3.431971800000042 },
							{ x: 0.1990089999999327, y: -2.0829778000000942 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -3.048000000000002, y: -2.0829778000000942 },
							{ x: -3.048000000000002, y: 0.7110222000000022 },
							{ x: 3.048000000000002, y: 0.7110222000000022 },
							{ x: 3.048000000000002, y: -2.0829778000000942 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -3.048000000000002, y: -2.0829778000000942 },
							{ x: 3.048000000000002, y: -2.0829778000000942 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0.0127mm"
						pcbY="3.1588222mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -4.542599999999993, y: 2.4088221999999178 },
							{ x: 4.56799999999987, y: 2.4088221999999178 },
							{ x: 4.56799999999987, y: -3.6791778000001614 },
							{ x: -4.542599999999993, y: -3.6791778000001614 },
							{ x: -4.542599999999993, y: 2.4088221999999178 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C319020.obj?uuid=fc12522ae2f04394b021187ce17b23bb",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C319020.step?uuid=fc12522ae2f04394b021187ce17b23bb",
				pcbRotationOffset: 180,
				modelOriginPosition: {
					x: 0,
					y: -0.5839836000000105,
					z: -0.0000010000000000287557,
				},
			}}
			{...props}
		/>
	);
};
