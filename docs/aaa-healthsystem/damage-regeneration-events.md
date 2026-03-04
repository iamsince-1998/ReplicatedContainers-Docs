---
id: damage-regeneration-events
title: Damage, Regeneration & Events
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Damage, Regeneration & Events

## Damage pipeline

```mermaid
flowchart LR
    A[Apply Damage] --> B[Health Component Receives Damage]
    B --> C{Has Armor?}
    C -- Yes --> D[Consume Armor First]
    D --> E{Damage Remaining?}
    E -- Yes --> F[Consume Health]
    E -- No --> G[Emit Update Events]
    C -- No --> F
    F --> H{Health <= 0?}
    H -- Yes --> I[Broadcast Death Event]
    H -- No --> G
```

## Toggle: Blueprint vs C++ implementation

<Tabs>
  <TabItem value="bp" label="Blueprint Visual" default>

```mermaid
flowchart TD
    N1([Event AnyDamage]) --> N2{HasArmor?}
    N2 -->|True| N3[Consume Armor]
    N2 -->|False| N4[Consume Health]
    N3 --> N5{Health <= 0?}
    N4 --> N5
    N5 -->|Yes| N6[Broadcast OnDeath]
    N5 -->|No| N7[Broadcast OnHealthChanged]
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

```mermaid
flowchart TD
    T1([Timer Tick]) --> T2{Is Alive?}
    T2 -->|No| T8[Stop]
    T2 -->|Yes| T3{Regen Enabled?}
    T3 -->|No| T8
    T3 -->|Yes| T4[Add Health / Armor]
    T4 --> T5[Clamp To Max Values]
    T5 --> T6[Broadcast UI Updates]
    T6 --> T7[Next Tick]
```

Next: [UI + Multiplayer Patterns](/aaa-healthsystem/ui-and-multiplayer).
