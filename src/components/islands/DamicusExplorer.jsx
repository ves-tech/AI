import { useState } from 'react';

// Static data mirrors the current Da-M-I-C-Us draft (Section 4).
// Update this alongside the framework doc — it's intentionally kept
// as plain data here rather than fetched, since it changes with the
// framework version, not on every build.
const DIMENSIONS = [
  {
    key: 'Da',
    name: 'Data',
    tagline: 'Provenance and rights status of the training data',
    kind: 'intrinsic',
    codes: [
      { code: 'ND', label: 'No Data', desc: 'No external training data required.' },
      { code: 'LD', label: 'Licensed Data', desc: 'Rights-cleared: licensed, commissioned, public domain, or permissively licensed.' },
      { code: 'PD', label: 'Proprietary Data', desc: 'Trained exclusively on data the organisation owns or controls.' },
      { code: 'WD', label: 'Web-collected Data', desc: 'Includes material collected from the public web without individual rights clearance.' },
      { code: 'UD', label: 'Undisclosed Data', desc: 'No usable information about training-data composition.' },
    ],
  },
  {
    key: 'M',
    name: 'Model',
    tagline: 'Availability and ownership of the model weights',
    kind: 'intrinsic',
    codes: [
      { code: 'OM', label: 'Open Model', desc: 'Weights published under a permissive licence.' },
      { code: 'RM', label: 'Restricted Model', desc: 'Weights published but licence restricts use.' },
      { code: 'CM', label: 'Closed Model', desc: 'Weights unavailable; accessed as a vendor service or licensed binary.' },
      { code: 'PM', label: 'Proprietary Model', desc: 'Developed in-house; weights owned by the organisation.' },
    ],
  },
  {
    key: 'I',
    name: 'Infrastructure',
    tagline: 'Where the capability runs and who controls the boundary',
    kind: 'part intrinsic, part deployment',
    codes: [
      { code: 'SI', label: 'Self-Managed Infrastructure', desc: 'On-premise or self-managed cloud, fully organisation-controlled.' },
      { code: 'DI', label: 'Dedicated Infrastructure', desc: 'Vendor-managed but isolated for the customer.' },
      { code: 'MI', label: 'Multi-Tenant Infrastructure', desc: 'Standard shared SaaS or public API.' },
      { code: 'EI', label: 'Edge Infrastructure', desc: 'Inference runs locally on end-user devices.' },
    ],
  },
  {
    key: 'C',
    name: 'Code',
    tagline: 'Licensing and ownership of the software',
    kind: 'intrinsic',
    codes: [
      { code: 'UC', label: 'Unlicensed Code', desc: 'No licence attached; no permission to copy, modify or use.' },
      { code: 'OC', label: 'Open Code', desc: 'Permissive open-source licence, commercial use allowed.' },
      { code: 'RC', label: 'Restricted Code', desc: 'Licence restricts use (non-commercial, copyleft, bespoke terms).' },
      { code: 'CC', label: 'Closed Code', desc: 'Source not available to the end user.' },
      { code: 'PC', label: 'Proprietary Code', desc: 'Developed in-house and owned by the organisation.' },
    ],
  },
  {
    key: 'Us',
    name: 'Use',
    tagline: 'How the organisation uses the outputs',
    kind: 'deployment',
    codes: [
      { code: 'BU', label: 'Business Use', desc: 'Supports operations; never touches the production workflow.' },
      { code: 'PU', label: 'Production Use', desc: 'Used in the production workflow; no generated content persists into the deliverable.' },
      { code: 'IU', label: 'Intermediate Use', desc: 'Generated content persists only after substantial human authorship.' },
      { code: 'DU', label: 'Direct Use', desc: 'Generated content appears in the deliverable without substantial modification.' },
    ],
  },
];

export default function DamicusExplorer() {
  const [activeKey, setActiveKey] = useState(DIMENSIONS[0].key);
  const active = DIMENSIONS.find((d) => d.key === activeKey);

  return (
    <div className="damicus-explorer">
      <div className="damicus-tabs" role="tablist">
        {DIMENSIONS.map((d) => (
          <button
            key={d.key}
            role="tab"
            aria-selected={d.key === activeKey}
            className={d.key === activeKey ? 'active' : ''}
            onClick={() => setActiveKey(d.key)}
          >
            {d.key} — {d.name}
          </button>
        ))}
      </div>

      <div className="damicus-panel">
        <p className="tagline">
          {active.tagline} <span className="kind">({active.kind})</span>
        </p>
        <ul className="code-list">
          {active.codes.map((c) => (
            <li key={c.code}>
              <span className="code-badge">{c.code}</span>
              <div>
                <strong>{c.label}</strong>
                <p>{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .damicus-explorer { font-family: inherit; color: inherit; }
        .damicus-tabs { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
        .damicus-tabs button {
          background: var(--color-surface, #171a21);
          border: 1px solid var(--color-border, #2a2e37);
          color: var(--color-text-muted, #9aa0ab);
          padding: 0.5rem 0.9rem;
          border-radius: 6px;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .damicus-tabs button.active {
          color: var(--color-text, #e8e9ec);
          border-color: var(--color-accent, #5b8cff);
        }
        .tagline { color: var(--color-text-muted, #9aa0ab); margin-bottom: 1.25rem; }
        .kind { font-style: italic; }
        .code-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.9rem; }
        .code-list li { display: flex; gap: 0.9rem; align-items: flex-start; }
        .code-badge {
          flex-shrink: 0;
          font-weight: 700;
          font-size: 0.8rem;
          background: var(--color-surface, #171a21);
          border: 1px solid var(--color-border, #2a2e37);
          border-radius: 6px;
          padding: 0.25rem 0.5rem;
          min-width: 2.5rem;
          text-align: center;
        }
        .code-list p { margin: 0.15rem 0 0; color: var(--color-text-muted, #9aa0ab); font-size: 0.92rem; }
      `}</style>
    </div>
  );
}
