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


## Visual setup walkthrough

### Install from Epic Launcher

![Install from Epic Launcher](https://github.com/user-attachments/assets/6ea4dd78-4e81-4340-bd54-11c2ff3f4ff3)

### Install from GitHub

![Install from GitHub](https://github.com/user-attachments/assets/5d267dcd-ba93-4d6a-85fa-919253bbcfd0)

### Plugins folder setup

![GitHub plugin folder setup](https://github.com/user-attachments/assets/e5373a00-6cc4-457c-b3b9-adc142d7f623)

![Plugin path example](https://github.com/user-attachments/assets/433363f1-a58d-47af-b17e-8178624deb69)

### Add health component + details panel

![Add component](https://github.com/user-attachments/assets/8b58b6f7-8bc4-4a0d-b57a-6a4f589a65d5)

![Details panel](https://github.com/user-attachments/assets/7ae52056-ac29-4146-aa7b-ae25efa89e64)

### Health and armor tuning

![Health settings](https://github.com/user-attachments/assets/bb0dbf06-f83a-4079-8aea-e6f20a92e8da)

![Armor settings](https://github.com/user-attachments/assets/8ffef254-9fad-43a3-a6c3-18a1a2cea7c2)
