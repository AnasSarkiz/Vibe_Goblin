# Vibe Goblin RP2040 Mini

Vibe Goblin RP2040 Mini is a compact assistive-alert prototype board built in tscircuit. It listens for sound through a microphone front end, shows status on a large I2C OLED, drives vibration as the main alert output, and includes RGB eyes plus an optional buzzer output.

This is a prototype board. It is not a certified emergency, smoke, fire, medical, or safety alarm.

## Board Overview

- Board size: `96mm x 66mm`
- Layers: 4
- Main controller: RP2040
- Power input: USB-C, regulated to 3.3 V
- Display: HS242L03B2C01 I2C OLED
- Main alert output: DRV2605L haptic driver with LCM04084521-B1 vibration motor
- Sound input: MAX9814 microphone amplifier with external microphone header
- Visual output: two WS2812B 2020 RGB LEDs
- Optional sound output: piezo buzzer with sound enable switch

The OLED is intentionally large relative to the board and some components are placed underneath its module area to keep the overall PCB smaller.

## Major Blocks

### USB-C and Power

- `J1` is the USB-C connector.
- `D1` provides USB data-line ESD protection.
- `U2` generates the 3.3 V rail.
- `R1_CC1` and `R2_CC2` are USB-C CC pull-down resistors.
- `C1_LDO_IN`, `C2_LDO_OUT`, and `C3_LDO_BYP` support the regulator.

### RP2040 Core

- `U1` is the RP2040.
- `U3` is the external QSPI flash.
- `Y1` is the crystal.
- `SW1_BOOTSEL` and `SW2_RUN` are edge-mounted boot/reset controls.
- `J2_SWD` is the SWD programming/debug header.

`J2_SWD` exposes `3V3`, `SWDIO`, `SWCLK`, `RUN`, and `GND`. Keep it for board bring-up and firmware recovery unless the board is already proven and you want to replace it with test pads.

### OLED Face

- `OLED1` is the HS242L03B2C01 I2C OLED.
- It connects to `GND`, `V3_3`, `SDA`, and `SCL`.
- The previous optional OLED backup header was removed to reduce routing clutter.

### Microphone Input

- `U4` is the MAX9814 microphone amplifier.
- `MIC1` is a hand-solder microphone header.
- `R7_ADC_FILTER_1K` and `C14_ADC_FILTER` feed the RP2040 ADC input.

### Haptic Vibration

- `U5` is the DRV2605L haptic driver.
- `M1` is the vibration motor.
- `R8_SDA_PULLUP` and `R9_SCL_PULLUP` are I2C pullups.

### RGB Eyes and Optional Buzzer

- `LED1_LEFT_EYE` and `LED2_RIGHT_EYE` are WS2812B 2020 LEDs.
- `U6` buffers the RGB data line.
- `BZ1` is the optional buzzer.
- `SW5_SOUND_ENABLE` is the edge-mounted sound enable switch.

## Test Points

The board includes edge-accessible test points for:

- Power: `TP_3V3`, `TP_VBUS`, `TP_GND`
- USB: `TP_DP`, `TP_DM`
- I2C: `TP_SDA`, `TP_SCL`
- Signals: `TP_AUDIO`, `TP_RGB`, `TP_HAPTIC`
- Debug/reset: `TP_SWDIO`, `TP_SWCLK`, `TP_RUN`

## Development Commands

Install dependencies:

```bash
bun install
```

Typecheck:

```bash
bun run typecheck
```

Check the netlist:

```bash
bunx tsci check netlist
```

Check PCB placement:

```bash
bunx tsci check placement
```

Run the tscircuit dev viewer:

```bash
bun run dev
```

Build:

```bash
bunx tsci build index.circuit.tsx
```

## Current Layout Notes

- Test points and switches are placed near board edges for easier probing and access.
- The large OLED occupies most of the front face.
- Some placement-check messages about components intruding into the OLED body are expected because the design intentionally places parts under the OLED module.
- Autorouting may still need tuning because the design is dense around the RP2040, OLED, USB, and haptic sections.

## Firmware Intent

The intended firmware flow is:

- Sample audio on `GPIO26_ADC0`.
- Detect short peaks, repeated peaks, and sustained loud sounds.
- Show status text on the OLED.
- Use vibration as the main alert output.
- Flash RGB LEDs for visual feedback.
- Keep optional buzzer output disabled or low by default.
