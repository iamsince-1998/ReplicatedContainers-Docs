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
