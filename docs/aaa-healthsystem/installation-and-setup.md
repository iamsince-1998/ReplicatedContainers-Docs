---
id: installation-and-setup
title: Installation & Setup
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation & Setup

## 1) Install plugin

<Tabs>
  <TabItem value="launcher" label="Epic Launcher" default>

1. Open **Epic Games Launcher**.
2. Install **AAA_HealthSystem** to your engine version.
3. Enable it in `Edit -> Plugins`.

  </TabItem>
  <TabItem value="github" label="GitHub / Manual">

1. Ensure your project can compile C++ once.
2. Create `YourProject/Plugins/AAA_HealthSystem`.
3. Regenerate project files and compile.

  </TabItem>
</Tabs>

## 2) Attach component to actor

Add `AAA_HealthSystem` component to your `Character`, `Pawn`, or any damageable actor.

```text
Actor Blueprint
  -> Add Component: AAA_HealthSystem
  -> Set defaults: MaxHealth, HasArmor, Regen flags
```

## 3) Configure core values

| Setting | Purpose | Typical Start |
|---|---|---|
| `Health` | Current health | 100 |
| `MaxHealth` | Cap for health | 100 |
| `HasArmor` | Enable armor layer | true (for shooters) |
| `ArmorDamageMultiplier` | Armor drain speed | 1.0 |
| `RegenerateHealth` | Health regen | false/true by game mode |
| `RegenerateArmor` | Armor regen | false/true by game mode |

## 4) Node map (quick setup)

```text
BeginPlay
  -> Get AAA_HealthSystem Component
  -> Set MaxHealth
  -> Set HasArmor
  -> Bind OnHealthChanged
```

Next: [Damage, Regeneration & Events](/aaa-healthsystem/damage-regeneration-events).
