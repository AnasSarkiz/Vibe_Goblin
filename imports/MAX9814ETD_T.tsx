import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["CT"],
	pin2: ["SHDN"],
	pin3: ["CG"],
	pin4: ["pin4"],
	pin5: ["VDD"],
	pin6: ["MICOUT"],
	pin7: ["GND"],
	pin8: ["MICIN"],
	pin9: ["pin9"],
	pin10: ["GAIN"],
	pin11: ["pin11"],
	pin12: ["BIAS"],
	pin13: ["MICBIAS"],
	pin14: ["TH"],
	pin15: ["EP"],
} as const;

export const MAX9814ETD_T = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C41714"],
			}}
			manufacturerPartNumber="MAX9814ETD_T"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-1.199896mm"
						pcbY="-1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="-0.8001mm"
						pcbY="-1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="-0.40005mm"
						pcbY="-1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="0mm"
						pcbY="-1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="0.40005mm"
						pcbY="-1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="0.8001mm"
						pcbY="-1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="1.199896mm"
						pcbY="-1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin8"]}
						pcbX="1.199896mm"
						pcbY="1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin9"]}
						pcbX="0.8001mm"
						pcbY="1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin10"]}
						pcbX="0.40005mm"
						pcbY="1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin11"]}
						pcbX="0mm"
						pcbY="1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin12"]}
						pcbX="-0.40005mm"
						pcbY="1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin13"]}
						pcbX="-0.8001mm"
						pcbY="1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin14"]}
						pcbX="-1.199896mm"
						pcbY="1.42748mm"
						width="0.2240026mm"
						height="0.5050028mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin15"]}
						pcbX="0mm"
						pcbY="0mm"
						width="2.2999954mm"
						height="1.6999966mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -1.5761970000000929, y: -1.5761969999999792 },
							{ x: -1.5761970000000929, y: 1.5761970000000929 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.5761969999998655, y: -1.5761969999999792 },
							{ x: 1.5761969999998655, y: 1.5761970000000929 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.1249660000000858, y: -1.9799299999999675 },
							{ x: -1.1275191778361204, y: -1.9993233110494657 },
							{ x: -1.13500471649445, y: -2.0173950000000787 },
							{ x: -1.146912488885846, y: -2.0329135111142023 },
							{ x: -1.1624310000000833, y: -2.0448212835054846 },
							{ x: -1.1805026889505825, y: -2.052306822163814 },
							{ x: -1.1998960000000807, y: -2.0548599999999624 },
							{ x: -1.2192893110495788, y: -2.052306822163814 },
							{ x: -1.237361000000078, y: -2.0448212835054846 },
							{ x: -1.2528795111143154, y: -2.0329135111142023 },
							{ x: -1.2647872835057115, y: -2.0173950000000787 },
							{ x: -1.272272822164041, y: -1.9993233110494657 },
							{ x: -1.2748260000000755, y: -1.9799299999999675 },
							{ x: -1.272272822164041, y: -1.9605366889504694 },
							{ x: -1.2647872835057115, y: -1.9424649999999701 },
							{ x: -1.2528795111143154, y: -1.9269464888857328 },
							{ x: -1.237361000000078, y: -1.9150387164944505 },
							{ x: -1.2192893110495788, y: -1.907553177836121 },
							{ x: -1.1998960000000807, y: -1.9049999999999727 },
							{ x: -1.1805026889505825, y: -1.907553177836121 },
							{ x: -1.1624310000000833, y: -1.9150387164944505 },
							{ x: -1.146912488885846, y: -1.9269464888857328 },
							{ x: -1.13500471649445, y: -1.9424649999999701 },
							{ x: -1.1275191778361204, y: -1.9605366889504694 },
							{ x: -1.1249660000000858, y: -1.9799299999999675 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0mm"
						pcbY="2.6764mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -1.824799999999982, y: 1.9264000000000578 },
							{ x: 1.824799999999982, y: 1.9264000000000578 },
							{ x: 1.824799999999982, y: -2.307399999999916 },
							{ x: -1.824799999999982, y: -2.307399999999916 },
							{ x: -1.824799999999982, y: 1.9264000000000578 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C41714.obj?uuid=93688f8ef501473f82f87e60b9280f5f",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C41714.step?uuid=93688f8ef501473f82f87e60b9280f5f",
				pcbRotationOffset: 0,
				modelOriginPosition: {
					x: 0.000012699999956566899,
					y: -0.000012699999956566899,
					z: -0.01,
				},
			}}
			{...props}
		/>
	);
};
