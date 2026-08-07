# AI Operations Platform (AIOP)

# 00 – GLOSSARY.md

Version: 1.0

Author: Maria Fe Blanca

---

# Purpose

This document defines the standard terminology used throughout the AI Operations Platform (AIOP).

The glossary establishes a common language for architects, developers, AI engineers, business analysts, and future contributors. Every document in this repository should reference these definitions to ensure consistency across the platform.

---

# Guiding Principle

Every term in this glossary has one official definition.

If a term changes, this document becomes the source of truth.

---

# A

## Adapter

A software component that translates communication between AIOP and an external application without changing the application's behavior.

Example:

Buildium Adapter

AppFolio Adapter

Slack Adapter

---

## API

Application Programming Interface.

The standardized communication method between AIOP and external systems.

---

## AI Assistant

A specialized AI capability focused on a particular operational function.

Examples:

AI Knowledge Assistant

AI Executive Assistant

AI Compliance Assistant

AI Vendor Assistant

---

## AI Response

The structured output returned by Claude after analyzing a request.

Responses should be deterministic whenever possible and returned in JSON for workflow execution.

---

# AIOP

Artificial Intelligence Operations Platform.

An enterprise platform that combines organizational knowledge, Artificial Intelligence, workflow automation, and business system integrations into a unified operational environment.

---

# B

## Business Event

Any operational occurrence that initiates a workflow.

Examples include:

- New email received
- Work order submitted
- Calendar event created
- Scheduled task
- Webhook notification

---

## Business Logic

The set of operational rules that determine how workflows execute.

Business logic belongs in the Workflow Engine—not inside prompts.

---

## Business System

An external application used to perform operational work.

Examples:

- Buildium
- AppFolio
- ClickUp
- Airtable
- QuickBooks

Business systems remain the system of record.

---

# C

## Claude Service

The platform service responsible for communicating with Claude AI.

Responsibilities include:

- Prompt construction
- Authentication
- Request handling
- Response validation
- Error handling

---

## Communication Layer

The architectural domain responsible for user interaction and communication.

Examples:

- Gmail
- Spark
- Slack
- Dialpad
- Google Calendar

---

## Context

Relevant organizational information provided to Claude before generating a response.

Context may include:

- SOPs
- Policies
- Templates
- Previous workflow data
- User input

---

# D

## Domain

A major functional area of the platform.

Examples:

Communication Domain

Knowledge Domain

Automation Domain

Intelligence Domain

Business Systems Domain

---

## Document Generation

The automated creation of structured documents.

Examples:

Meeting Minutes

Letters

Reports

SOPs

PDFs

---

# E

## Event

A system occurrence detected by the Trigger Manager.

Events begin workflows.

---

# G

## Google Apps Script

The primary automation engine used by AIOP.

Responsible for:

- Workflow orchestration
- API execution
- Scheduling
- Trigger management
- Document automation

---

# I

## Intelligence Layer

The architectural domain responsible for reasoning.

Powered by Claude.

---

## Integration

A connection between AIOP and an external application.

Integrations should be modular and API-first.

---

# K

## Knowledge Asset

Any document or information source used by the platform.

Examples:

SOP

Policy

Template

Training Guide

Contract

Checklist

Vendor Documentation

---

## Knowledge Base

The organized collection of Knowledge Assets used to provide context for AI reasoning.

---

## Knowledge Retrieval

The process of locating and supplying relevant organizational information before invoking Claude.

---

# L

## Layer

A major architectural boundary within AIOP.

Layers separate responsibilities while enabling controlled communication.

Examples:

Communication Layer

Knowledge Layer

AI Layer

Automation Layer

Infrastructure Layer

---

# M

## Module

A self-contained software component responsible for one capability.

Examples:

Workflow Engine

Prompt Manager

Knowledge Manager

Notification Manager

---

# O

## Orchestration

The coordination of multiple services into a single workflow.

Orchestration is performed by the Workflow Engine.

---

# P

## Platform

The complete AI Operations Platform consisting of all architectural domains, services, workflows, integrations, and knowledge assets.

---

## Prompt

Structured instructions sent to Claude.

Prompts contain:

- System Instructions
- Context
- User Request
- Output Requirements

---

## Prompt Library

The centralized repository of reusable prompt templates.

---

# R

## Repository

The complete GitHub project containing documentation, source code, prompts, templates, workflows, and supporting assets.

---

## Reasoning

The process by which Claude interprets information and generates recommendations or structured outputs.

Reasoning does not execute business actions.

---

# S

## Service

A reusable software component that provides a specific capability.

Examples:

Claude Service

Knowledge Service

Notification Service

Integration Service

---

## System of Record

The authoritative location where operational data is stored.

Examples:

Buildium

AppFolio

Google Sheets (for lightweight workflows)

AIOP should not replace a system of record without explicit design.

---

# T

## Template

A reusable document or prompt structure containing variable placeholders.

---

## Trigger

A mechanism that detects a Business Event and initiates a workflow.

Examples:

Time Trigger

Gmail Trigger

Webhook

Spreadsheet Trigger

---

# W

## Workflow

A sequence of coordinated actions executed to complete a business process.

Every workflow follows the pattern:

Business Event

↓

Context Retrieval

↓

AI Reasoning

↓

Execution

↓

Audit Logging

---

## Workflow Engine

The core orchestration service responsible for coordinating all workflow execution.

The Workflow Engine does not perform AI reasoning directly.

Instead, it coordinates platform services to complete operational tasks.

---

# Design Language

Throughout the AIOP documentation:

- **Platform** refers to the complete AI Operations Platform.
- **Domain** refers to a major architectural boundary.
- **Layer** refers to the logical separation of responsibilities.
- **Module** refers to a reusable software component.
- **Service** refers to an executable capability.
- **Workflow** refers to a business process.
- **Integration** refers to communication with external systems.
- **Knowledge Asset** refers to organizational information.
- **Business System** refers to the external system of record.

These definitions should remain consistent across all documentation, code, prompts, and implementation guides.

---

# Governance

The Glossary is the authoritative source for platform terminology.

Every new document, module, workflow, or integration should adopt the terminology defined here.

When introducing a new platform concept, update this glossary before using the new term elsewhere in the repository.
