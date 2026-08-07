# AI Operations Platform (AIOP)

# Engineering Standard

# 03 – Prompt Standards

Version: 1.0

Author: Maria Fe Blanca

Status: Active

---

# Purpose

This document establishes the official prompt engineering standards for the AI Operations Platform (AIOP).

Prompt engineering is treated as a software engineering discipline. Prompts are production assets that must be versioned, documented, reviewed, tested, and maintained with the same rigor as application code.

These standards apply to:

- Claude AI
- Future AI providers
- Prompt templates
- AI assistants
- Workflow prompts
- Knowledge retrieval prompts
- AI evaluation prompts

---

# Philosophy

Prompts are software.

A production prompt should be:

- Predictable
- Reusable
- Version controlled
- Testable
- Maintainable
- Secure
- Well documented

A prompt is never "finished."

It evolves alongside the platform.

---

# Core Principles

Every prompt should:

✓ Have one responsibility

✓ Produce structured output

✓ Minimize ambiguity

✓ Use organizational knowledge

✓ Avoid assumptions

✓ Be deterministic whenever possible

---

# Prompt Lifecycle

Every production prompt follows the same lifecycle.

```
Design

↓

Review

↓

Testing

↓

Approval

↓

Production

↓

Monitoring

↓

Improvement

↓

Version Update
```

---

# Prompt Categories

The platform organizes prompts into standardized categories.

```
System

Workflow

Knowledge

Communication

Reporting

Compliance

Evaluation

Utility
```

---

# Standard Prompt Structure

Every production prompt follows this structure.

```
Role

↓

Objective

↓

Context

↓

Instructions

↓

Constraints

↓

Expected Output

↓

Validation Rules

↓

Examples
```

---

# 1. Role

Define the AI's responsibility.

Example

```
You are the AI Operations Assistant for the Property Management Department.
```

---

# 2. Objective

Clearly define the task.

Example

```
Classify the incoming maintenance request.
```

Avoid multiple objectives.

---

# 3. Context

Provide only relevant organizational information.

Examples

- SOP excerpts
- Policies
- Workflow rules
- Customer information
- Meeting transcript

Context should always be minimized.

---

# 4. Instructions

Use clear, numbered instructions.

Example

```
1. Read the maintenance request.

2. Determine priority.

3. Determine category.

4. Generate summary.

5. Return JSON.
```

---

# 5. Constraints

Explicitly state limitations.

Examples

```
Do not invent information.

Do not change company policy.

Use only supplied context.

Do not include explanations.

Return JSON only.
```

---

# 6. Expected Output

Always define output format.

Preferred

JSON

Example

```json
{
  "category": "",
  "priority": "",
  "summary": "",
  "recommended_action": ""
}
```

Avoid free-form output for production workflows.

---

# 7. Validation Rules

Specify expected behavior.

Example

```
If category cannot be determined

↓

Return

Unknown
```

---

# 8. Examples

Provide examples whenever practical.

Good examples improve consistency.

---

# Prompt Naming

Prompt files use:

```
001-Email-Classification.md

002-Meeting-Summary.md

003-Violation-Letter.md

004-Knowledge-Search.md
```

Never use:

```
newprompt.md

test.md

prompt-final.md
```

---

# Prompt Metadata

Every prompt begins with metadata.

Example

```yaml
Name: Email Classification

Version: 1.0.0

Owner: AI Engineering

Category: Workflow

Status: Production

Output: JSON
```

---

# Prompt Versioning

Use Semantic Versioning.

```
1.0.0

1.1.0

1.2.0

2.0.0
```

Update versions when:

- Business rules change
- Output changes
- Context changes
- Validation changes

---

# Prompt Variables

Use double curly braces.

Example

```
{{resident_name}}

{{workflow}}

{{meeting_notes}}

{{email_body}}

{{policy}}
```

Never concatenate strings manually.

---

# Context Injection

Context should be:

Relevant

Minimal

Current

Validated

Never include unrelated documents.

---

# Prompt Size

Recommended

< 4,000 tokens

Maximum

Model dependent

Large prompts should retrieve context dynamically.

---

# Prompt Libraries

Organize prompts by capability.

```
prompts/

system/

workflow/

knowledge/

email/

reports/

compliance/

utilities/
```

---

# Knowledge Integration

Prompts should reference:

- SOPs
- Policies
- Templates
- Company standards

Never rely solely on model memory.

Knowledge retrieval occurs before prompt generation.

---

# Security

Never expose:

API Keys

Passwords

Secrets

Private customer information

Financial credentials

Prompt context should follow least-privilege principles.

---

# Hallucination Prevention

Prompts should include instructions such as:

```
Use only the supplied context.

If information is unavailable,

respond with

"I don't have enough information."

Do not fabricate answers.
```

---

# Prompt Testing

Every production prompt must be tested for:

Accuracy

Consistency

JSON validity

Edge cases

Missing context

Unexpected input

Large input

---

# Prompt Review Checklist

Before production:

☐ Role defined

☐ Objective defined

☐ Context minimized

☐ Instructions numbered

☐ Constraints documented

☐ JSON output defined

☐ Examples included

☐ Prompt version updated

☐ Security reviewed

☐ Tested successfully

---

# AI Output Validation

Every response should be validated.

Examples

Required fields

Valid JSON

Allowed values

Maximum length

Business rules

Never execute AI output without validation.

---

# Anti-Patterns

Avoid:

Multiple objectives

Hidden instructions

Very long prompts

Duplicated prompts

Business logic inside prompts

Prompt chaining without validation

Hardcoded customer information

---

# Prompt Repository Structure

```
prompts/

README.md

system/

workflow/

knowledge/

email/

reports/

compliance/

utilities/

archive/
```

---

# Prompt Documentation

Each prompt should have:

Purpose

Owner

Version

Input

Output

Dependencies

Example

Known limitations

---

# AI Provider Independence

Prompts should be portable.

Avoid provider-specific wording unless required.

AIOP should support future providers with minimal prompt changes.

---

# Definition of Done

A prompt is production-ready when:

✓ Versioned

✓ Documented

✓ Tested

✓ Reviewed

✓ Validated

✓ Approved

✓ Stored in Prompt Library

---

# Prompt Engineering Philosophy

A prompt is not merely a question asked to an AI.

Within AIOP, a prompt is a software component that translates business intent into structured AI reasoning.

Well-designed prompts improve consistency, reduce operational risk, and enable reliable automation across the platform.

Every prompt should be treated as a long-term engineering asset and maintained with the same discipline applied to application code.