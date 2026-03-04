---
id: overview
title: Overview
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Mobile Performance Optimizer

Runtime plugin that automatically tunes FPS, scalability, and dynamic resolution for stable mobile performance.

## Visual runtime shape

```text
Frame Samples -> Thermal Estimate -> Policy Decision -> Apply Changes
      ^                                                   |
      |------------------- next evaluation tick ----------|
```

## Core features

- Auto scalability up/down with cooldown and thresholds
- Auto FPS limiter based on thermal estimate
- Dynamic resolution toggling with hysteresis
- Profile-based configuration (Editor/Android/iOS/Fallback)
- Hardware + device profile auto-tuning

## Blueprint vs C++ control (toggle)

<Tabs>
  <TabItem value="bp" label="Blueprint Nodes" default>

```text
BeginPlay
  -> Get Game Instance Subsystem (MobilePerformanceOptimizerSubsystem)
  -> Set Optimizer Enabled(true)
  -> Set Target FPS(60)

Timer / UI Button
  -> Run Optimization Now
  -> Get Runtime State
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
auto* Subsystem = GetGameInstance()->GetSubsystem<UMobilePerformanceOptimizerSubsystem>();
if (Subsystem)
{
    Subsystem->SetOptimizerEnabled(true);
    Subsystem->SetTargetFPS(60.f);
    Subsystem->RunOptimizationNow();
}
```

  </TabItem>
</Tabs>

## Full Config System (UE4.27 to UE5.7 style workflow)

This plugin supports profile-based configuration from **Project Settings**:

- `Editor Preview Profile`
- `Android Profile`
- `iOS Profile`
- `Fallback Profile`

Open:

`Project Settings -> Plugins -> Mobile Performance Optimizer`

You can configure:

- General sampling and target FPS
- Low FPS trigger (`LowFPSThreshold`, required sample count)
- Heat trigger (`bEnableThermalTrigger`) with temperature thresholds
- Auto scalability ranges and thresholds
- FPS limiter per thermal state
- Dynamic resolution thresholds and screen percentage bounds
- Hardware/software auto-tuning (`bAutoTuneFromHardware`, `bAutoTuneFromDeviceProfileName`)
- Optional startup scalability
- Optional VSync policy
- Extra console commands on profile apply

## How It Works

The plugin runs a `UGameInstanceSubsystem` (`UMobilePerformanceOptimizerSubsystem`) on a timer.
Every evaluation tick, it:

1. Samples current FPS.
2. Tracks rolling average FPS.
3. Estimates thermal state from sustained FPS pressure.
4. Applies FPS cap policy.
5. Enables/disables dynamic resolution based on FPS thresholds.
6. Adjusts overall scalability level up/down with cooldown and hysteresis.
7. Applies selected runtime profile (editor preview vs mobile device).

## Installation

1. Copy plugin to:

```text
Plugins/MobilePerformanceOptimizer
```

2. Enable plugin in Unreal Editor:

`Edit -> Plugins -> Mobile Performance Optimizer -> Enabled`

3. Restart editor.

## Runtime Profile Selection

- Android runtime: uses `Android Profile`
- iOS runtime: uses `iOS Profile`
- Non-mobile runtime:
  - Uses `Editor Preview Profile` when enabled
  - Otherwise uses `Fallback Profile`

## Blueprint API

- `Set Optimizer Enabled(bool)`
- `Is Optimizer Enabled()`
- `Run Optimization Now()`
- `Set Target FPS(float)`
- `Get Target FPS()`
- `Get Runtime State()`
- `Reload Config From Project Settings()`
