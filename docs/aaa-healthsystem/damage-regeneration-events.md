---
id: damage-regeneration-events
title: Damage, Regeneration & Events
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Damage, Regeneration & Events

## Damage pipeline

```text
ApplyDamage -> Component receives damage
           -> Armor absorbs first (if enabled)
           -> Remaining damage goes to health
           -> Fires update events
           -> Fires death event at 0 health
```

## Toggle: Blueprint vs C++ implementation

<Tabs>
  <TabItem value="bp" label="Blueprint Nodes" default>

```text
Event AnyDamage
  -> Branch (HasArmor?)
      True: Consume Armor
      False: Consume Health
  -> Call Update Health Bar
  -> If Health <= 0 : Broadcast Death
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
void AMyCharacter::HandleIncomingDamage(float Damage)
{
    if (!HealthComp) return;

    // Route damage into plugin component API.
    // Component handles armor->health order and event dispatching.
}
```

  </TabItem>
</Tabs>

## Event reference

| Event / Dispatcher | When to use |
|---|---|
| `OnHealthChanged` | Update HP text/progress bar |
| `OnMaxHealthChanged` | Re-scale widgets if max changes |
| `OnUpdateHealthBar` | Normalized value for progress bar |
| `OnUpdateMaxHealthBar` | Secondary bars / segmented UI |
| `OnDeath` (or equivalent) | Respawn, ragdoll, spectator switch |

## Regeneration pattern

```text
Timer (every N seconds)
  -> If Alive
  -> If Regen Enabled
  -> Add Health / Add Armor
  -> Clamp to Max
  -> Broadcast UI updates
```

Next: [UI + Multiplayer Patterns](/aaa-healthsystem/ui-and-multiplayer).
