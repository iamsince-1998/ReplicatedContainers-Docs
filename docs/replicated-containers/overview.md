---
id: overview
title: Overview
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replicated Containers Plugin

Runtime plugin providing **replicated TMap and TSet** components with fast-array delta replication,
server-authority routing, and a full Blueprint API.

Compatible with **Unreal Engine 4.27 through 5.x** on all supported platforms.

## Features

| Feature | Map | Set |
|---|:---:|:---:|
| Automatic server replication | ✓ | ✓ |
| Delta (per-item) replication via FastArraySerializer | ✓ | ✓ |
| OnRep / delegate callbacks | ✓ | ✓ |
| Client→Server RPC forwarding | ✓ | ✓ |
| Full Blueprint API | ✓ | ✓ |
| Full C++ API | ✓ | ✓ |
| Dedicated server builds | ✓ | ✓ |
| All platforms (Win/Linux/Mac/Console/Mobile) | ✓ | ✓ |


## Container sync flow (visual)

```text
Client Intent -> Server RPC -> Mutate Map/Set -> FastArray Delta -> Clients OnRep
```

## Blueprint vs C++ mutation patterns

<Tabs>
  <TabItem value="bp" label="Blueprint Nodes" default>

```text
Client
  -> Add Item (Replicated Map Component)
  -> (Internally forwards to server)
Server
  -> Validates + applies mutation
  -> Replicates delta
Clients
  -> On Map Changed delegate
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
// Pseudocode: call plugin map component API
if (HasAuthority())
{
    RepMapComp->SetValue(Key, Value);
}
else
{
    RepMapComp->ServerSetValue(Key, Value);
}
```

  </TabItem>
</Tabs>

## Compatibility

### Engine Versions

| Engine | Supported |
|---|---|
| UE 4.27 | ✓ |
| UE 5.0 | ✓ |
| UE 5.1 | ✓ |
| UE 5.2 | ✓ |
| UE 5.3 | ✓ |
| UE 5.4 | ✓ |
| UE 5.5+ | ✓ |

The plugin uses `ENGINE_MAJOR_VERSION` / `ENGINE_MINOR_VERSION` guards to select the correct
`RemoveAtSwap` API (`bool` on 4.27–5.0, `EAllowShrinking` enum on 5.1+).

### Build Configurations

| Configuration | Supported | Notes |
|---|:---:|---|
| Editor (PIE) | ✓ | Full replication in Play-in-Editor |
| Standalone Game | ✓ | |
| Listen Server | ✓ | Server authority on the hosting player |
| Dedicated Server | ✓ | See [Dedicated Server](/replicated-containers/dedicated-server) |
| Client | ✓ | Read-only; mutations forwarded to server via RPC |

### Platforms

| Platform | Supported |
|---|---|
| Windows 64-bit | ✓ |
| Windows 32-bit | ✓ (UE 4.27 only) |
| macOS | ✓ |
| Linux x64 | ✓ |
| Linux ARM64 | ✓ |
| Android | ✓ |
| iOS | ✓ |
| PlayStation 4 | ✓ |
| PlayStation 5 | ✓ |
| Xbox One | ✓ |
| Xbox Series X/S | ✓ |
