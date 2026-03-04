---
id: overview
title: Overview
sidebar_position: 1
---

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
