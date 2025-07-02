import React from 'react';

const CircleFill = ({ percent, size = 40, fillColor = '#4caf50', bgColor = 'var(--border-color)' }) => {
  const radius = size / 2;
  const fillHeight = size * (1 - percent / 100);

  return (
    <svg width={size} height={size}>
      <defs>
        <mask id={`fill-mask-${percent}`}>
          <rect x="0" y={fillHeight} width={size} height={size} fill="white" />
        </mask>
      </defs>

      {}
      <circle cx={radius} cy={radius} r={radius} fill={bgColor} />

      {} 
      <circle   
        cx={radius}
        cy={radius}
        r={radius}
        fill={fillColor}
        mask={`url(#fill-mask-${percent})`}
      />
    </svg>
  );
};

const FilledCirclesDisplay = () => {
  const data = [
    { value: 65, label: "₹ 650", note: "Daily" },
    { value: 75, label: "₹ 4,550", note: "Weekly" },
    { value: 85, label: "₹ 19,500", note: "Monthly" },
    { value: 90, label: "₹ 2,34,000", note: "Annually" },
  ];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {data.map((item, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ height: '40px', width: '40px', margin: '0 auto' }}>
            <CircleFill percent={item.value} />
          </div>
          <div style={{ marginTop: '4px', fontWeight: 'bold', color: '#4caf50' }}>
            {item.label}
          </div>
          <small>{item.note}</small>
        </div>
      ))}
    </div>
  );
};

export default FilledCirclesDisplay;
