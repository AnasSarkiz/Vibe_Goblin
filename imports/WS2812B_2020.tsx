import type { LedProps } from "@tscircuit/props";

export const WS2812B_2020 = (props: LedProps) => {
	const { name = "LED1", ...restProps } = props;

	return (
		<led
			name={name}
			supplierPartNumbers={{
				jlcpcb: ["C965555"],
			}}
			manufacturerPartNumber="WS2812B_2020"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-0.915035mm"
						pcbY="0.550037mm"
						width="0.8999982mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="-0.915035mm"
						pcbY="-0.550037mm"
						width="0.8999982mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="0.915035mm"
						pcbY="-0.550037mm"
						width="0.8999982mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="0.915035mm"
						pcbY="0.550037mm"
						width="0.8999982mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -0.24998679999998785, y: 0.7499603999999636 },
							{ x: -0.09999980000009145, y: 0.7499603999999636 },
							{ x: -0.09999980000009145, y: -0.6500114000000394 },
							{ x: -0.09999980000009145, y: -0.6999986000000717 },
							{ x: -0.24998679999998785, y: -0.6999986000000717 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.24998679999998785, y: 0.7499603999999636 },
							{ x: -0.24998679999998785, y: -0.7000239999999849 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.299997400000052, y: 1.1499850000000151 },
							{ x: -1.299997400000052, y: 1.1381486000000223 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.9999979999998914, y: 1.0999977999999828 },
							{ x: -0.999998000000005, y: 1.0999977999999828 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.999998000000005, y: -1.0999977999999828 },
							{ x: 0.9999979999998914, y: -1.0999977999999828 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.013335mm"
						pcbY="2.159637mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -1.622235000000046, y: 1.4096369999999752 },
							{ x: 1.5955649999998514, y: 1.4096369999999752 },
							{ x: 1.5955649999998514, y: -1.3509629999999788 },
							{ x: -1.622235000000046, y: -1.3509629999999788 },
							{ x: -1.622235000000046, y: 1.4096369999999752 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C965555.obj?uuid=caa88715b11f4aa189b02e52bbb84e4f",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C965555.step?uuid=caa88715b11f4aa189b02e52bbb84e4f",
				pcbRotationOffset: 0,
				modelOriginPosition: {
					x: -0.000025399999913133797,
					y: -0.00012700000002041634,
					z: -0.02,
				},
			}}
			{...restProps}
		/>
	);
};
