---
id: overview
title: Overview
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AAA_HealthSystem

A production-ready health + armor framework for Unreal projects that need **clean gameplay flow**, **UI events**, and **multiplayer-safe behavior**.

## Why teams use it

- **Drop-in component model**: add one component to any actor.
- **Server-authoritative flow**: safe behavior in multiplayer.
- **UI-friendly events**: progress bars and widgets can bind directly.
- **Blueprint-first** with C++ extension support.

## What’s inside

| Capability | Included |
|---|---|
| Health + Max Health management | ✅ |
| Optional armor layer | ✅ |
| Regeneration (health/armor) | ✅ |
| Event dispatchers for HUD updates | ✅ |
| Multiplayer replication | ✅ |
| Blueprint API | ✅ |
| C++ extension points | ✅ |

## At-a-glance gameplay shape

```text
Incoming Damage
      |
      v
 [Armor?] --yes--> Reduce Armor --> Armor Empty? --> Health
      | no
      v
   Reduce Health --> Is Dead? --> Broadcast Death / Update UI
```

## Blueprint vs C++ usage

<Tabs>
  <TabItem value="bp" label="Blueprint Nodes" default>

```text
BeginPlay
  -> Get Component (AAA_HealthSystem)
  -> Bind Event: OnHealthChanged
  -> Bind Event: OnDeath

AnyDamage
  -> Apply Damage (to owning actor)

Tick/Timer
  -> Call RegenerateHealth (optional)
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
// Character header
UPROPERTY(VisibleAnywhere, BlueprintReadOnly)
UAAA_HealthSystemComponent* HealthComp;

// Character constructor
HealthComp = CreateDefaultSubobject<UAAA_HealthSystemComponent>(TEXT("HealthComp"));

// Example hook
void AMyCharacter::BeginPlay()
{
    Super::BeginPlay();
    // Bind delegates exposed by the component (plugin API)
}
```

  </TabItem>
</Tabs>

## Recommended reading order

1. [Installation & Setup](/aaa-healthsystem/installation-and-setup)
2. [Damage, Regeneration & Events](/aaa-healthsystem/damage-regeneration-events)
3. [UI + Multiplayer Patterns](/aaa-healthsystem/ui-and-multiplayer)

---

Need the original long visual walkthrough? Keep it as project media, then map each screenshot into the new pages above so users can learn in smaller chunks.
