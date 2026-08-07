# AI Operations Platform (AIOP)

# Engineering Standard

# 01 – Naming Standards

Version: 1.0

Author: Maria Fe Blanca

Status: Active

---

# Purpose

This document defines the official naming conventions for the AI Operations Platform (AIOP).

Consistent naming improves readability, maintainability, discoverability, and collaboration across documentation, source code, prompts, workflows, APIs, and business assets.

Every contributor should follow these standards when creating or modifying platform components.

---

# Guiding Principles

Every name should be:

- Descriptive
- Consistent
- Predictable
- Searchable
- Technology-agnostic where possible

Avoid abbreviations unless they are universally understood within the project.

---

# General Naming Rules

Use names that describe **what something is**, not **how it is implemented**.

Good

```
WorkflowEngine
```

Bad

```
WorkflowStuff
```

---

Good

```
KnowledgeManager
```

Bad

```
KnowledgeThing
```

---

# Repository Names

Use:

kebab-case

Example

```
ai-operations-platform
```

Other examples

```
property-management-module

hoa-knowledge-base

construction-workflows
```

Never use spaces.

Never use underscores.

---

# Folder Naming

Folders use:

kebab-case

Examples

```
docs/

engineering/

knowledge-base/

workflow-library/

prompt-library/

api-integrations/

generated-documents/

templates/

assets/
```

---

# Markdown Files

Use:

Pascal-Case

Examples

```
README.md

PLAN.md

VISION.md

SYSTEM-DESIGN.md

DATA-ARCHITECTURE.md
```

Engineering documents

```
Naming-Standards.md

Coding-Standards.md

Prompt-Standards.md

Security-Standards.md
```

---

# Google Apps Script Files

Use:

PascalCase

Examples

```
Main.gs

WorkflowEngine.gs

KnowledgeManager.gs

PromptManager.gs

Logger.gs

Configuration.gs

Utilities.gs

ClaudeService.gs

NotificationService.gs
```

Each file should represent one module.

---

# JavaScript Functions

Use:

camelCase

Examples

```
processWorkflow()

classifyEmail()

generateMeetingMinutes()

sendNotification()

loadKnowledge()

buildPrompt()

callClaude()

updateWorkOrder()
```

Functions should begin with a verb.

---

# Classes

Use:

PascalCase

Examples

```
WorkflowEngine

KnowledgeManager

ClaudeClient

NotificationService

PromptLibrary

DocumentGenerator
```

Class names should always be nouns.

---

# Variables

Use:

camelCase

Examples

```
currentWorkflow

knowledgeAssets

promptTemplate

residentName

workflowStatus

emailSubject
```

Avoid abbreviations.

Bad

```
rw

tmp

obj
```

---

# Constants

Use:

UPPER_SNAKE_CASE

Examples

```
MAX_RETRY_COUNT

DEFAULT_TIMEOUT

API_VERSION

LOG_LEVEL

SYSTEM_PROMPT
```

---

# Environment Variables

Use:

UPPER_SNAKE_CASE

Examples

```
CLAUDE_API_KEY

BUILDIUM_API_KEY

APPFOLIO_API_KEY

DEFAULT_TIMEZONE

WORKFLOW_TIMEOUT

GOOGLE_PROJECT_ID
```

---

# Configuration Keys

Use:

dot.notation

Examples

```
ai.model

workflow.timeout

email.sender

notifications.enabled

security.audit.enabled
```

---

# Workflow Names

Use:

Verb + Business Object

Examples

```
Process Maintenance Request

Generate Meeting Minutes

Classify Resident Email

Create Vendor Work Order

Send Daily Summary
```

Avoid generic names.

Bad

```
Workflow 1

Automation

Test Process
```

---

# Business Events

Use:

Past Tense

Examples

```
EmailReceived

WorkOrderCreated

MeetingCompleted

InspectionScheduled

InvoiceGenerated
```

---

# Workflow IDs

Use:

WORKFLOW-XXX

Examples

```
WORKFLOW-001

WORKFLOW-002

WORKFLOW-003
```

---

# Prompt Files

Use:

Number + Purpose

Examples

```
001-Email-Classification.md

002-Meeting-Summary.md

003-Resident-Reply.md

004-Violation-Letter.md

005-Work-Order.md
```

---

# Prompt Variables

Use:

Double curly braces

Examples

```
{{resident_name}}

{{community_name}}

{{meeting_notes}}

{{vendor_name}}

{{email_body}}
```

---

# API Endpoints

Use:

REST conventions

```
GET /work-orders

POST /work-orders

GET /vendors

PUT /vendors/{id}

DELETE /vendors/{id}
```

Always use plural resources.

---

# Google Sheets

Use:

Title Case

Examples

```
Work Orders

Vendor Directory

Meeting Minutes

Prompt Library

Workflow Logs

Knowledge Assets
```

---

# Spreadsheet Columns

Use:

Title Case

Examples

```
Resident Name

Vendor Email

Priority

Created Date

Status

Workflow ID
```

Avoid

```
Resident_Name

residentname
```

---

# Google Drive

Folders use:

Title Case

Examples

```
Knowledge Base

Meeting Minutes

Generated Reports

Vendor Documents

Templates

Policies
```

---

# Google Docs

Use

Date + Name

Examples

```
2026-08-07 Meeting Minutes

2026-08-07 Daily Operations Report

2026-08-07 Vendor Performance Report
```

---

# Log Entries

Use structured fields.

Examples

```
Timestamp

Workflow

Status

Duration

User

Module

Prompt Version

Tokens

Error
```

---

# Error Codes

Use:

MODULE-### format

Examples

```
AI-001

API-002

WORKFLOW-003

KNOWLEDGE-004

AUTH-005
```

---

# Version Numbers

Semantic Versioning

```
1.0.0

1.1.0

1.2.5

2.0.0
```

---

# Git Branches

Use:

```
main

develop

feature/

bugfix/

hotfix/

release/
```

Examples

```
feature/email-classification

feature/knowledge-search

bugfix/prompt-parsing

hotfix/api-timeout
```

---

# Commit Messages

Follow Conventional Commits.

Examples

```
feat: add workflow engine

fix: resolve Claude timeout handling

docs: update architecture guide

refactor: simplify prompt manager

test: add integration tests
```

---

# AI Assistant Names

Use:

AI + Role

Examples

```
AI Knowledge Assistant

AI Operations Assistant

AI Compliance Assistant

AI Executive Assistant

AI Vendor Assistant
```

---

# Service Names

Use:

<Service>Service

Examples

```
ClaudeService

EmailService

KnowledgeService

NotificationService

LoggingService

IntegrationService
```

---

# Manager Names

Use:

<Resource>Manager

Examples

```
WorkflowManager

PromptManager

ConfigurationManager

KnowledgeManager

DocumentManager
```

Managers coordinate resources but should not contain business logic unrelated to their domain.

---

# Adapter Names

Use:

<System>Adapter

Examples

```
BuildiumAdapter

AppFolioAdapter

SlackAdapter

SparkAdapter
```

Adapters isolate external system integrations.

---

# File Organization Example

```
scripts/

Main.gs

WorkflowEngine.gs

ClaudeService.gs

KnowledgeManager.gs

PromptManager.gs

NotificationService.gs

LoggingService.gs

Utilities.gs
```

---

# Naming Anti-Patterns

Avoid

```
temp

misc

test2

newfile

workflow-final

workflow-final-v2

script1

manager_new
```

Use meaningful names that reflect purpose and responsibility.

---

# Review Checklist

Before creating a new file, class, workflow, or document, ask:

- Does the name describe its purpose?
- Is it consistent with existing standards?
- Does it follow the correct naming convention?
- Can another developer understand it without explanation?
- Will it remain meaningful as the platform evolves?

---

# Summary

Consistent naming is a foundational engineering practice.

Following these standards ensures that AIOP remains understandable, maintainable, and scalable as the platform grows across industries, teams, and contributors.

Names should communicate intent, support discoverability, and reinforce the platform's modular architecture.