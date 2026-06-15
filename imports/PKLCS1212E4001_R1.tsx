import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["_POS"],
	pin2: ["_NEG"],
} as const;

export const PKLCS1212E4001_R1 = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C113159"],
			}}
			manufacturerPartNumber="PKLCS1212E4001_R1"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin2"]}
						pcbX="5.499989mm"
						pcbY="0mm"
						width="1.499997mm"
						height="4.499991mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="-5.499989mm"
						pcbY="0mm"
						width="1.499997mm"
						height="4.499991mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 0.000025399999913133797, y: 6.096000000000004 },
							{ x: -6.0959746000000905, y: 6.096000000000004 },
							{ x: -6.0959746000000905, y: 2.5400000000000773 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -6.0959746000000905, y: -2.5400000000000773 },
							{ x: -6.0959746000000905, y: -6.096000000000004 },
							{ x: 6.096025399999917, y: -6.096000000000004 },
							{ x: 6.096025399999917, y: -2.5400000000000773 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 6.095085600000061, y: 2.5400000000000773 },
							{ x: 6.095085600000061, y: 6.096000000000004 },
							{ x: -0.0009143999999423613, y: 6.096000000000004 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.539974599999937, y: -6.096000000000004 },
							{ x: -2.539974599999937, y: -4.572000000000003 },
							{ x: 2.5400253999999904, y: -4.572000000000003 },
							{ x: 2.5400253999999904, y: -6.096000000000004 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.011811mm"
						pcbY="7.096mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -6.510211000000027, y: 6.346000000000004 },
							{ x: 6.486588999999867, y: 6.346000000000004 },
							{ x: 6.486588999999867, y: -6.346000000000004 },
							{ x: -6.510211000000027, y: -6.346000000000004 },
							{ x: -6.510211000000027, y: 6.346000000000004 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C113159.obj?uuid=f7607a9699d849ec8f54e5e83abf494f",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C113159.step?uuid=f7607a9699d849ec8f54e5e83abf494f",
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: 0, z: 0 },
			}}
			{...props}
		/>
	);
};
