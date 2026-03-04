---
id: ui-and-multiplayer
title: UI + Multiplayer Patterns
sidebar_position: 4
---

# UI + Multiplayer Patterns

## UI binding pattern

Use one widget function to consume normalized values from the component.

```text
Widget Construct
  -> Get Owning Pawn
  -> Get AAA_HealthSystem Component
  -> Bind OnUpdateHealthBar (0..1)
  -> Bind OnUpdateMaxHealthBar (0..1)
```

## Multiplayer rules (simple)

- Mutations (damage/heal/add armor) should happen on the **server**.
- Clients receive replicated values and update UI through events.
- Keep combat authority server-side to prevent cheating/desync.

## Replication shape

```text
Client fire/hit input
   -> Server validates
   -> Server applies damage via health component
   -> Replicated values + events fan out to clients
   -> HUD updates everywhere
```

## Practical balancing tips

- Use armor for burst protection, health for survivability pacing.
- Keep regen delayed after damage to avoid “unkillable” feel.
- Tune multipliers separately for PvP and PvE presets.

## Troubleshooting quick list

| Symptom | Check |
|---|---|
| UI bar not moving | Is widget bound to component events? |
| Client sees stale HP | Are updates applied on server authority? |
| Death not firing | Is health clamped and zero-check centralized? |
| Regen too strong | Increase interval or lower per-tick regen |


## UI screenshots (provided)

### Event dispatchers list

![Dispatchers list](https://github.com/user-attachments/assets/e4d041ef-1f07-4769-a383-5fa91b2e124a)

### Bind health/armor progress bars

![Bind progress bars](https://github.com/user-attachments/assets/2f562a8c-df2e-4eee-9a49-5e90c8c2154e)

### Helper functions and extra dispatchers

![Health helper functions](https://github.com/user-attachments/assets/b29ac1c6-5be2-4606-85f2-0ca07388e8d6)

![Armor helper functions](https://github.com/user-attachments/assets/46e031b1-9515-4af0-bd30-d17c6514cbf1)

![More event dispatchers](https://github.com/user-attachments/assets/e11e13e3-9a16-49df-b6b3-1c5b02f80c60)
