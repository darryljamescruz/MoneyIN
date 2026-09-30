/* @ds-bundle: {"format":4,"namespace":"DbrandDesignSystem_68eb84","components":[{"name":"DeviceTile","sourcePath":"components/commerce/DeviceTile.jsx"},{"name":"FeatureList","sourcePath":"components/commerce/FeatureList.jsx"},{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"ProductTile","sourcePath":"components/commerce/ProductTile.jsx"},{"name":"SocialPost","sourcePath":"components/commerce/SocialPost.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ImageFrame","sourcePath":"components/core/ImageFrame.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"SectionHeader","sourcePath":"components/navigation/SectionHeader.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/commerce/DeviceTile.jsx":"c54d4f0c0cd8","components/commerce/FeatureList.jsx":"95bc0faafd28","components/commerce/PriceTag.jsx":"a1ee9dcb4cfb","components/commerce/ProductTile.jsx":"7a68825f9d22","components/commerce/SocialPost.jsx":"6ee3659d190b","components/core/Badge.jsx":"9bd32337f25a","components/core/Button.jsx":"3e47d0beeba3","components/core/Icon.jsx":"c03ce4e76cbe","components/core/IconButton.jsx":"3b7bcbc5d552","components/core/ImageFrame.jsx":"8bdd64bc2c35","components/core/Wordmark.jsx":"c045b70491fe","components/feedback/Dialog.jsx":"0e006e1dbfc0","components/feedback/Toast.jsx":"08f62f5c3d53","components/forms/Checkbox.jsx":"b8484a3685cf","components/forms/Input.jsx":"dc93f7f3bc23","components/forms/QuantityStepper.jsx":"f13c3012fc79","components/forms/Select.jsx":"e6a7a70a82f3","components/navigation/Breadcrumbs.jsx":"ed95947e2d50","components/navigation/SectionHeader.jsx":"484f6a3c5781","components/navigation/SiteHeader.jsx":"17b5ccde90cb","ui_kits/storefront/CartDrawer.jsx":"b3f5726c919f","ui_kits/storefront/Home.jsx":"636bd1ddfca7","ui_kits/storefront/ProductPage.jsx":"1f7f4deebbf4","ui_kits/storefront/data.js":"5c4ec80938dd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DbrandDesignSystem_68eb84 = window.DbrandDesignSystem_68eb84 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/DeviceTile.jsx
try { (() => {
function DeviceTile({
  brand,
  name,
  description,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 24,
      minHeight: 220,
      background: h ? 'var(--surface-3)' : 'var(--surface-2)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--text-tertiary)'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-black) 36px/.95 var(--font-display)',
      fontStretch: 'var(--wdth-condensed)',
      textTransform: 'uppercase',
      color: h ? 'var(--accent)' : 'var(--text-primary)',
      transition: 'color var(--dur-base) var(--ease-out)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      marginTop: 'auto',
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, description));
}
Object.assign(__ds_scope, { DeviceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/DeviceTile.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PriceTag.jsx
try { (() => {
const fmt = n => typeof n === 'number' ? '$' + n.toFixed(2) : n;
function PriceTag({
  price,
  listPrice,
  size = 'md',
  style
}) {
  const fs = {
    sm: 15,
    md: 20,
    lg: 32
  }[size] || 20;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-black) ' + fs + 'px/1 var(--font-display)',
      color: 'var(--text-primary)'
    }
  }, fmt(price)), listPrice ? /*#__PURE__*/React.createElement("s", {
    style: {
      font: 'var(--fw-medium) ' + Math.round(fs * .7) + 'px/1 var(--font-body)',
      color: 'var(--text-tertiary)'
    }
  }, fmt(listPrice)) : null);
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'sale',
  children,
  style
}) {
  const T = {
    sale: ['var(--accent)', 'var(--accent-ink)', 'transparent'],
    inverse: ['var(--surface-inverse)', 'var(--text-inverse)', 'transparent'],
    neutral: ['var(--surface-3)', 'var(--text-primary)', 'transparent'],
    outline: ['transparent', 'var(--text-primary)', 'var(--border-strong)'],
    danger: ['var(--danger)', '#fff', 'transparent'],
    sage: ['var(--accent-2)', 'var(--accent-2-ink)', 'transparent']
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 8px',
      background: T[0],
      color: T[1],
      border: '1px solid ' + T[2],
      borderRadius: 'var(--radius-xs)',
      font: 'var(--fw-bold) 11px/1 var(--font-body)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://unpkg.com/heroicons@2.1.5/24/';
function Icon({
  name,
  variant = 'outline',
  size = 20,
  color = 'currentColor',
  label,
  style,
  ...rest
}) {
  const url = BASE + (variant === 'solid' ? 'solid' : 'outline') + '/' + name + '.svg';
  const m = 'url(' + url + ') center/contain no-repeat';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      backgroundColor: color,
      WebkitMask: m,
      mask: m,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 14,
    fs: 12,
    ic: 14
  },
  md: {
    h: 'var(--control-h-md)',
    px: 20,
    fs: 14,
    ic: 16
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 28,
    fs: 16,
    ic: 18
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  chevron = false,
  icon,
  fullWidth = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const ev = {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  };
  const s = SIZES[size] || SIZES.md;
  const V = {
    primary: {
      bg: h ? 'var(--accent-hover)' : 'var(--accent)',
      fg: 'var(--accent-ink)',
      bd: 'transparent'
    },
    secondary: {
      bg: h ? 'var(--db-gray-200)' : 'var(--surface-inverse)',
      fg: 'var(--text-inverse)',
      bd: 'transparent'
    },
    outline: {
      bg: h ? 'var(--surface-3)' : 'transparent',
      fg: 'var(--text-primary)',
      bd: h ? 'var(--text-primary)' : 'var(--border-strong)'
    },
    ghost: {
      bg: h ? 'var(--surface-3)' : 'transparent',
      fg: 'var(--text-primary)',
      bd: 'transparent'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick
  }, disabled ? {} : ev, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      width: fullWidth ? '100%' : undefined,
      background: disabled ? 'var(--surface-3)' : V.bg,
      color: disabled ? 'var(--text-disabled)' : V.fg,
      border: '1px solid ' + (disabled ? 'transparent' : V.bd),
      borderRadius: 'var(--radius-sm)',
      font: 'var(--fw-bold) ' + s.fs + 'px/1 var(--font-body)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: p ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic
  }) : null, /*#__PURE__*/React.createElement("span", null, children), chevron ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: s.ic,
    style: {
      marginRight: -4,
      transform: h ? 'translateX(2px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 40,
  iconSize,
  badge,
  disabled = false,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const ev = {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  };
  const bg = variant === 'solid' ? h ? 'var(--db-gray-200)' : 'var(--surface-inverse)' : variant === 'outline' ? h ? 'var(--surface-3)' : 'transparent' : h ? 'var(--surface-3)' : 'transparent';
  const fg = variant === 'solid' ? 'var(--text-inverse)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick
  }, ev, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      padding: 0,
      background: bg,
      color: disabled ? 'var(--text-disabled)' : fg,
      border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent',
      borderRadius: variant === 'outline' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transform: p ? 'scale(.94)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize || Math.round(size * .5)
  }), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      minWidth: 16,
      height: 16,
      padding: '0 4px',
      borderRadius: 8,
      background: 'var(--accent)',
      color: 'var(--accent-ink)',
      font: 'var(--fw-bold) 10px/16px var(--font-body)',
      textAlign: 'center'
    }
  }, badge) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ImageFrame.jsx
try { (() => {
function ImageFrame({
  src,
  alt = '',
  aspect,
  fit = 'cover',
  radius = 0,
  zoom = false,
  style
}) {
  const [err, setErr] = React.useState(false);
  const show = src && !err;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: aspect,
      background: 'var(--surface-3)',
      borderRadius: radius,
      overflow: 'hidden',
      ...style
    }
  }, show ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setErr(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block',
      transform: zoom ? 'scale(1.04)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      gap: 8,
      padding: 14,
      background: 'radial-gradient(120% 90% at 50% 30%,var(--db-gray-700),var(--db-gray-900))'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "camera",
    size: 16,
    color: "var(--text-tertiary)"
  }), alt ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 11px/1.35 var(--font-mono)',
      color: 'var(--text-tertiary)',
      textWrap: 'pretty',
      maxWidth: 320
    }
  }, alt) : null));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/commerce/FeatureList.jsx
try { (() => {
function FeatureList({
  items = [],
  defaultIndex = 0,
  style
}) {
  const [i, setI] = React.useState(defaultIndex);
  const cur = items[i] || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 32,
      alignItems: 'start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((it, k) => {
    const on = k === i;
    return /*#__PURE__*/React.createElement("li", {
      key: k,
      style: {
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setI(k),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        width: '100%',
        padding: '18px 0',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        color: on ? 'var(--text-primary)' : 'var(--text-tertiary)',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--fw-medium) 13px/1 var(--font-mono)',
        color: on ? 'var(--accent)' : 'inherit'
      }
    }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        font: 'var(--fw-black) 26px/1 var(--font-display)',
        fontStretch: 'var(--wdth-condensed)',
        textTransform: 'uppercase'
      }
    }, it.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 18,
      style: {
        transform: on ? 'rotate(90deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    })), on ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 20px 40px',
        font: 'var(--text-body)',
        color: 'var(--text-secondary)',
        textWrap: 'pretty'
      }
    }, it.body) : null);
  })), /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    key: i,
    src: cur.image,
    alt: cur.imageAlt || cur.title,
    aspect: "1/1",
    radius: "var(--radius-md)"
  }));
}
Object.assign(__ds_scope, { FeatureList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/FeatureList.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductTile.jsx
try { (() => {
function ProductTile({
  image,
  imageAlt = '',
  eyebrow,
  title,
  description,
  badge,
  price,
  onClick,
  aspect = '4/3',
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-2)',
      border: '1px solid ' + (h ? 'var(--border-strong)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'border-color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: image,
    alt: imageAlt,
    aspect: aspect,
    zoom: h
  }), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '16px 18px 20px'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--text-tertiary)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--fw-black) 22px/1 var(--font-display)',
      fontStretch: 'var(--wdth-condensed)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16,
    style: {
      opacity: h ? 1 : 0,
      transform: h ? 'none' : 'translateX(-4px)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  })), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, description) : null, price ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 15px/1 var(--font-body)',
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, price) : null));
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SocialPost.jsx
try { (() => {
function SocialPost({
  image,
  imageAlt = '',
  avatar,
  name,
  handle,
  platform = 'twitter',
  text,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-2)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: image,
    alt: imageAlt,
    aspect: "1/1"
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--surface-3)',
      overflow: 'hidden',
      flex: 'none'
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 14px/1.2 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 12px/1.2 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, handle, " \xB7 ", platform))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, text)));
}
Object.assign(__ds_scope, { SocialPost });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SocialPost.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 24,
  color = 'var(--text-primary)',
  compact = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": "dbrand",
    style: {
      display: 'inline-block',
      font: 'var(--fw-black) ' + size + 'px/1 var(--font-display)',
      fontStretch: '100%',
      letterSpacing: '-.04em',
      color,
      textTransform: 'lowercase',
      ...style
    }
  }, compact ? 'db' : 'dbrand');
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'var(--surface-overlay)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-2)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-pop)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '16px 16px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--fw-black) 22px/1.1 var(--font-display)',
      fontStretch: 'var(--wdth-condensed)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x-mark",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px 24px',
      font: 'var(--text-body)',
      color: 'var(--text-secondary)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '16px 24px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  title,
  message,
  icon = 'check-circle',
  tone = 'success',
  action,
  onClose,
  style
}) {
  const c = {
    success: 'var(--success)',
    danger: 'var(--danger)',
    info: 'var(--accent)'
  }[tone] || 'var(--success)';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 360,
      maxWidth: '100%',
      padding: '14px 8px 14px 16px',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-pop)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    variant: "solid",
    size: 20,
    color: c,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 14px/1.3 var(--font-body)'
    }
  }, title), message ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--db-gray-600)'
    }
  }, message) : null, action ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4
    }
  }, action) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x-mark",
    label: "Dismiss",
    size: 28,
    iconSize: 16,
    onClick: onClose,
    style: {
      color: 'var(--text-inverse)'
    }
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  description,
  trailing,
  variant = 'plain',
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  const row = variant === 'row';
  return /*#__PURE__*/React.createElement("div", {
    role: "checkbox",
    "aria-checked": on,
    tabIndex: 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: row ? '12px 14px' : 0,
      background: row ? on ? 'var(--surface-3)' : 'var(--surface-2)' : 'transparent',
      border: row ? '1px solid ' + (on ? 'var(--text-primary)' : 'var(--border-subtle)') : 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out),background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      background: on ? 'var(--accent)' : 'transparent',
      border: '1.5px solid ' + (on ? 'var(--accent)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-xs)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    variant: "solid",
    size: 14,
    color: "var(--accent-ink)"
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 15px/1.3 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)'
    }
  }, description) : null), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 14px/1 var(--font-body)',
      color: 'var(--text-secondary)'
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  icon,
  error,
  hint,
  type = 'text',
  disabled = false,
  style
}) {
  const [f, setF] = React.useState(false);
  const bc = error ? 'var(--danger)' : f ? 'var(--text-primary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 'var(--control-h-md)',
      padding: '0 14px',
      background: 'var(--surface-2)',
      border: '1px solid ' + bc,
      borderRadius: 'var(--radius-sm)',
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      opacity: disabled ? .5 : 1
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--text-secondary)"
  }) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--text-primary)',
      font: 'var(--text-body)'
    }
  })), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-s)',
      color: error ? 'var(--danger)' : 'var(--text-tertiary)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  style
}) {
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 36,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "minus",
    label: "Decrease",
    size: 34,
    iconSize: 14,
    disabled: value <= min,
    onClick: () => set(value - 1)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 28,
      textAlign: 'center',
      font: 'var(--fw-bold) 14px/1 var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "plus",
    label: "Increase",
    size: 34,
    iconSize: 14,
    disabled: value >= max,
    onClick: () => set(value + 1)
  }));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue,
    onChange: e => onChange && onChange(e.target.value, e),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 40px 0 14px',
      background: 'var(--surface-2)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--fw-semibold) 15px/1 var(--font-body)',
      cursor: 'pointer'
    }
  }, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--text-secondary)",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      marginTop: -8,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      font: 'var(--fw-medium) 13px/1 var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "home",
    size: 14,
    color: "var(--text-tertiary)"
  }), items.map((it, k) => {
    const last = k === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: k
    }, k > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 12,
      color: "var(--text-tertiary)"
    }) : null, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-primary)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it);
      },
      style: {
        color: 'var(--text-secondary)',
        textDecoration: 'none'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionHeader.jsx
try { (() => {
function SectionHeader({
  title,
  onTitleClick,
  onPrev,
  onNext,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onTitleClick && onTitleClick();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--fw-black) var(--fs-40)/1 var(--font-display)',
      fontStretch: 'var(--wdth-condensed)',
      textTransform: 'uppercase'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 24
  })), onPrev || onNext ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-left",
    label: "Previous",
    variant: "outline",
    onClick: onPrev
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-right",
    label: "Next",
    variant: "outline",
    onClick: onNext
  })) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const DEFAULT = ['MNML', 'Ghost', 'Tank', 'Cases', 'Screen Protectors', 'Limited Edition', 'Skins', 'Gaming', 'Support'];
function NavLink({
  label,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick(label);
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      font: 'var(--fw-bold) 13px/1 var(--font-body)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active || h ? 'var(--text-primary)' : 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      padding: '8px 0',
      borderBottom: '2px solid ' + (active ? 'var(--accent)' : 'transparent'),
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, label);
}
function SiteHeader({
  links = DEFAULT,
  active,
  cartCount = 0,
  onNavigate,
  onHome,
  onSearch,
  onAccount,
  onCart,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      height: 'var(--header-h)',
      padding: '0 var(--gutter)',
      background: 'rgba(0,0,0,.82)',
      backdropFilter: 'var(--blur-header)',
      WebkitBackdropFilter: 'var(--blur-header)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHome && onHome();
    },
    style: {
      textDecoration: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      gap: 24,
      overflow: 'hidden'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l,
    label: l,
    active: l === active,
    onClick: onNavigate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "magnifying-glass",
    label: "Search",
    onClick: onSearch
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "user",
    label: "Account",
    onClick: onAccount
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "shopping-cart",
    label: "Cart",
    badge: cartCount || undefined,
    onClick: onCart
  })));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartDrawer.jsx
try { (() => {
(() => {
  const {
    IconButton,
    ImageFrame,
    QuantityStepper,
    Button,
    PriceTag
  } = window.DbrandDesignSystem_68eb84;
  function CartDrawer({
    open,
    items,
    setItems,
    onClose
  }) {
    const sub = items.reduce((s, i) => s + i.price * i.qty, 0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--surface-overlay)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-slow) var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("aside", {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: 420,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-1)',
        borderLeft: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-drawer)',
        transform: open ? 'none' : 'translateX(100%)',
        transition: 'transform var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'var(--header-h)',
        padding: '0 16px 0 24px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--fw-black) 22px/1 var(--font-display)',
        fontStretch: 'var(--wdth-condensed)',
        textTransform: 'uppercase'
      }
    }, "Cart"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x-mark",
      label: "Close",
      onClick: onClose
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, items.length === 0 ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-secondary)'
      }
    }, "Your cart is empty. The Robots are disappointed.") : items.map((it, k) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'grid',
        gridTemplateColumns: '72px 1fr auto',
        gap: 14,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(ImageFrame, {
      aspect: "1/1",
      radius: "var(--radius-sm)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--fw-bold) 15px/1.2 var(--font-body)'
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-body-s)',
        color: 'var(--text-secondary)'
      }
    }, it.device), /*#__PURE__*/React.createElement(QuantityStepper, {
      value: it.qty,
      min: 0,
      onChange: v => setItems(items.map((x, j) => j === k ? {
        ...x,
        qty: v
      } : x).filter(x => x.qty > 0))
    })), /*#__PURE__*/React.createElement(PriceTag, {
      price: it.price * it.qty,
      size: "sm"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-label)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)'
      }
    }, "Subtotal"), /*#__PURE__*/React.createElement(PriceTag, {
      price: sub
    })), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      chevron: true,
      disabled: !items.length
    }, "Checkout"))));
  }
  window.CartDrawer = CartDrawer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Button,
    IconButton,
    ImageFrame,
    SectionHeader,
    DeviceTile,
    ProductTile,
    SocialPost
  } = window.DbrandDesignSystem_68eb84;
  function Hero({
    slides
  }) {
    const [i, setI] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    React.useEffect(() => {
      if (paused) return;
      const t = setTimeout(() => setI((i + 1) % slides.length), 6000);
      return () => clearTimeout(t);
    }, [i, paused]);
    const s = slides[i];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)',
        gap: 'var(--space-6)',
        alignItems: 'center',
        padding: 'var(--space-7) var(--gutter)',
        minHeight: 560,
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-mono)',
        textTransform: 'uppercase',
        letterSpacing: '.08em',
        color: 'var(--accent)'
      }
    }, s.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: 'var(--fw-black) var(--fs-96)/var(--lh-tight) var(--font-display)',
        fontStretch: 'var(--wdth-condensed)',
        textTransform: 'uppercase',
        textWrap: 'balance'
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 460,
        font: 'var(--text-body-l)',
        color: 'var(--text-secondary)',
        textWrap: 'pretty'
      }
    }, s.body), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      chevron: true
    }, "Shop Now"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 16
      }
    }, slides.map((x, k) => /*#__PURE__*/React.createElement("button", {
      key: k,
      "aria-label": 'Slide ' + (k + 1),
      onClick: () => setI(k),
      style: {
        width: k === i ? 32 : 10,
        height: 4,
        padding: 0,
        border: 0,
        borderRadius: 2,
        background: k === i ? 'var(--text-primary)' : 'var(--border-strong)',
        cursor: 'pointer',
        transition: 'width var(--dur-base) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement(IconButton, {
      icon: paused ? 'play' : 'pause',
      label: paused ? 'Play' : 'Pause',
      size: 28,
      iconSize: 14,
      onClick: () => setPaused(!paused)
    }))), /*#__PURE__*/React.createElement(ImageFrame, {
      key: i,
      alt: s.alt,
      aspect: "3/2",
      radius: "var(--radius-md)"
    }));
  }
  function Rail({
    title,
    children,
    cols = 4
  }) {
    const ref = React.useRef();
    const by = d => ref.current && ref.current.scrollBy({
      left: d * ref.current.clientWidth * .8,
      behavior: 'smooth'
    });
    return /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        padding: 'var(--space-7) var(--gutter) 0'
      }
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      title: title,
      onPrev: () => by(-1),
      onNext: () => by(1)
    }), /*#__PURE__*/React.createElement("div", {
      ref: ref,
      style: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: 'calc((100% - ' + (cols - 1) * 16 + 'px)/' + cols + ')',
        gap: 16,
        overflowX: 'auto',
        scrollbarWidth: 'none'
      }
    }, children));
  }
  function Home({
    data,
    onProduct
  }) {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
      slides: data.hero
    }), /*#__PURE__*/React.createElement(Rail, {
      title: "Popular Devices",
      cols: 4
    }, data.devices.map(d => /*#__PURE__*/React.createElement(DeviceTile, _extends({
      key: d.name
    }, d, {
      onClick: onProduct
    })))), /*#__PURE__*/React.createElement(Rail, {
      title: "Over 23 Million Customers Worldwide",
      cols: 4
    }, data.posts.map(p => /*#__PURE__*/React.createElement(SocialPost, _extends({
      key: p.handle,
      imageAlt: p.alt
    }, p)))), /*#__PURE__*/React.createElement(Rail, {
      title: "Cases",
      cols: 4
    }, data.cases.map(c => /*#__PURE__*/React.createElement(ProductTile, _extends({
      key: c.id,
      imageAlt: c.alt
    }, c, {
      onClick: onProduct
    })))), /*#__PURE__*/React.createElement(Rail, {
      title: "Gaming",
      cols: 4
    }, data.gaming.map(c => /*#__PURE__*/React.createElement(ProductTile, _extends({
      key: c.id,
      imageAlt: c.alt
    }, c, {
      onClick: onProduct
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 'var(--space-9)'
      }
    }));
  }
  window.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductPage.jsx
try { (() => {
(() => {
  const {
    Breadcrumbs,
    ImageFrame,
    Select,
    Checkbox,
    PriceTag,
    Button,
    Dialog,
    FeatureList
  } = window.DbrandDesignSystem_68eb84;
  function ProductPage({
    data,
    onAdd,
    onHome
  }) {
    const p = data.tank;
    const [img, setImg] = React.useState(0);
    const [device, setDevice] = React.useState('iPhone 17 Pro Max');
    const [addons, setAddons] = React.useState({});
    const [dlg, setDlg] = React.useState(false);
    const total = p.price + p.addons.reduce((s, a) => s + (addons[a.id] ? a.price : 0), 0);
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
        gap: 'var(--space-7)',
        padding: 'var(--space-5) var(--gutter) var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        label: 'Home'
      }, {
        label: 'Shop'
      }, {
        label: p.title.replace('Tank Case', 'Cases')
      }],
      onNavigate: onHome,
      style: {
        marginBottom: 8
      }
    }), /*#__PURE__*/React.createElement(ImageFrame, {
      key: img,
      alt: p.gallery[img],
      aspect: "1/1",
      radius: "var(--radius-md)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gap: 8
      }
    }, p.gallery.map((g, k) => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setImg(k),
      "aria-label": g,
      style: {
        padding: 0,
        border: '1px solid ' + (k === img ? 'var(--text-primary)' : 'var(--border-subtle)'),
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        cursor: 'pointer',
        background: 'none'
      }
    }, /*#__PURE__*/React.createElement(ImageFrame, {
      aspect: "1/1"
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 'calc(var(--header-h) + 24px)',
        alignSelf: 'start',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        paddingTop: 36
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        font: 'var(--fw-black) var(--fs-56)/var(--lh-tight) var(--font-display)',
        fontStretch: 'var(--wdth-condensed)',
        textTransform: 'uppercase',
        textWrap: 'balance'
      }
    }, device + ' Tank Case'), /*#__PURE__*/React.createElement(Select, {
      label: "Device",
      options: p.devices,
      value: device,
      onChange: setDevice
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-label)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)'
      }
    }, "Addons"), p.addons.map(a => /*#__PURE__*/React.createElement(Checkbox, {
      key: a.id,
      variant: "row",
      label: a.label,
      trailing: '+$' + a.price.toFixed(2),
      checked: !!addons[a.id],
      onChange: v => setAddons({
        ...addons,
        [a.id]: v
      })
    })), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        setDlg(true);
      },
      style: {
        font: 'var(--text-body-s)',
        color: 'var(--text-secondary)',
        marginTop: 4
      }
    }, "Only need the buttons?")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(PriceTag, {
      price: total,
      listPrice: total + (p.listPrice - p.price),
      size: "lg"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-mono)',
        color: 'var(--text-tertiary)'
      }
    }, "Robot(c)4026")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      chevron: true,
      onClick: () => onAdd({
        title: 'Tank Case',
        device,
        price: total
      })
    }, "Add To Cart"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: 'var(--text-body-s)',
        color: 'var(--text-secondary)',
        textWrap: 'pretty'
      }
    }, p.manifesto))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'var(--space-8) var(--gutter)',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(FeatureList, {
      items: p.features
    })), /*#__PURE__*/React.createElement(Dialog, {
      open: dlg,
      title: "Only need the buttons?",
      onClose: () => setDlg(false),
      footer: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => setDlg(false)
      }, "Got it")
    }, "To purchase only the buttons, add your Tank with one or more button packs to cart, then remove the Tank. This will leave only the button packs in your cart."));
  }
  window.ProductPage = ProductPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
window.DB_DATA = {
  hero: [{
    eyebrow: 'The Non-Folding One',
    title: 'iPhone 18 Pro',
    alt: 'iPhone 18 Pro in Deep Black with a dbrand Ghost Case applied',
    body: 'No hinge. No crease. No "innovation." Just the iPhone everyone actually bought, and a series of cases, screen protectors, and skins to go with it. Shipping now for the 18 Pro & Max.'
  }, {
    eyebrow: 'minimalist cases',
    title: 'MNML',
    alt: 'Four cases stacked on a 45-degree angle in four colorways: Burgundy, Navy, Tan, and Black',
    body: 'Introducing: the minimalist phone case.™ Available for twelve devices across Apple, Samsung, and Google. Nothing fancy, just a nice sandstone texture and four colorways. Also, a magnetic wallet.'
  }, {
    eyebrow: 'Now for AirPods',
    title: 'Tank Case',
    alt: 'An AirPods Pro 3 charging case with a Tank Case applied',
    body: 'When we launched the Tank Case, people had many questions, like "when are you making it for my phone?" and "why does it look so ugly?" Naturally, we ignored them and made Tank for AirPods Pro 3.'
  }, {
    eyebrow: 'idiot-proof',
    title: 'Screen Protectors',
    alt: 'A Prism 2.0 installation tray, with a pull tab at the bottom',
    body: 'With Prism 2.0, it couldn\u2019t be any easier. Our meticulously precise installer tray guarantees a flawless installation, every time. Zero bubbles, zero dust, zero misalignment. Oh, and we include two.'
  }],
  devices: [{
    brand: 'Nintendo',
    name: 'Switch 2',
    description: 'Want to use your Switch 2 on the go without the debilitating hand cramps? Good news: we made an ultra-protective case called the Killswitch.'
  }, {
    brand: 'Apple',
    name: 'iPhone',
    description: 'Protect your fruit-themed smartphone with a customizable Grip Case, zero-yellowing Ghost, ultra-rugged Tank, idiot-proof Prism, or a custom-fitted skin. Don\u2019t forget to cancel your AppleCare.'
  }, {
    brand: 'Samsung',
    name: 'Galaxy',
    description: 'Samsung barely changes the industrial design from year to year. That might lead you to believe that it\u2019s easy to design cases for Galaxy devices. You would be correct.'
  }, {
    brand: 'Apple',
    name: 'AirPods',
    description: 'Have you ever wished you could make your AirPods look less like the world\u2019s most expensive dental floss? Perfect. Yes, it comes in black.'
  }, {
    brand: 'Google',
    name: 'Pixel',
    description: 'There\u2019s a program called \u201cMade for Google\u201d. We were the first ones in it. Not sure what you could possibly do with this information, but there it is.'
  }, {
    brand: 'Apple',
    name: 'MacBook',
    description: 'Despite all odds, Apple\u2019s MacBook continues to be the world\u2019s best-selling laptop. We\u2019ve been making MacBook skins for well over a decade. Checkmate, Tim.'
  }],
  cases: [{
    id: 'ghost',
    title: 'Ghost',
    eyebrow: 'Clear case',
    alt: 'A Ghost Case on a Cosmic Orange iPhone 17 Pro Max',
    description: 'The zero-yellowing clear case. Featuring enhanced scratch resistance, drop protection up to 12ft, and a lifetime zero-yellowing guarantee.'
  }, {
    id: 'ghost-prism',
    title: 'Ghost + Prism',
    eyebrow: 'Bundle',
    badge: '15% OFF',
    alt: 'Ghost Case 2.0 and Prism Screen Protector bundle',
    description: 'Zero-yellowing clarity meets the idiot-proof screen protector. Save 15% on the bundle.'
  }, {
    id: 'tank',
    title: 'Tank',
    eyebrow: 'Rugged case',
    alt: 'A Tank Case on an iPhone 17 Pro Max',
    description: 'The combat-ready phone case. Combines industrial-grade ergonomics and military-grade protection in an unmistakably unique form factor.'
  }, {
    id: 'grip',
    title: 'Grip',
    eyebrow: 'Grippy case',
    alt: 'A Grip Case with a Teardown skin on an S23 Ultra',
    description: 'The world\u2019s grippiest phone case. Engineered over seven generations to stop drops before they happen. Customizable with 40+ skin designs.'
  }],
  gaming: [{
    id: 'killswitch',
    title: 'Killswitch',
    eyebrow: 'Handheld case',
    alt: 'A Switch 2 with Killswitch Case and Joy-Lock Grips',
    description: 'The ultimate handheld gaming case for the Switch 2, Steam Deck, Xbox Ally, and various ROG models. Ultra Kits include a screen protector.'
  }, {
    id: 'darkplates',
    title: 'Darkplates',
    eyebrow: 'PS5 panels',
    badge: '50% OFF',
    alt: 'Darkplates 2.0 for PS5 Slim',
    description: 'The streamlined PS5 side panel replacement that Sony didn\u2019t want you to buy.'
  }, {
    id: 'gaming-skins',
    title: 'Gaming Skins',
    eyebrow: 'Skins',
    alt: 'Steam Machine skins in Terminal, Black Dice and Bricks designs',
    description: 'It\u2019s kind of like DLC skins, but in real life.'
  }, {
    id: 'gaming-glass',
    title: 'Gaming Glass',
    eyebrow: 'Screen protector',
    alt: 'A hand applying a Prism screen protector to a Nintendo Switch 2',
    description: 'Ultra-precise, scratch-resistant screen protectors, from the Switch 2 to the Steam Deck.'
  }],
  posts: [{
    name: 'Caramel Jenkins',
    handle: '@CaramelJenkins',
    platform: 'twitter',
    alt: 'A pair of Nintendo Switch 2s with Prism Screen Protectors applied',
    text: '2 for 2 on flawless Prism 2.0 screen protector installations. Thanks @dbrand for making the process idiot (me) proof.'
  }, {
    name: 'Loopios7',
    handle: '@loopios7',
    platform: 'twitter',
    alt: 'A OnePlus Grip Case with minor cosmetic damage after a motorcycle accident',
    text: 'Hey @dbrand , I tested your case in a motorcycle accident for you!'
  }, {
    name: 'Jon Valiagas',
    handle: '@jonvaliagas',
    platform: 'twitter',
    alt: 'A hand holding a Cosmic Orange iPhone 17 Pro Max with a Tank Case applied',
    text: 'The @dbrand tank case looks insane on the orange iPhone 17 Pro Max with the swappable orange buttons.'
  }, {
    name: 'Anastacio Guerrero',
    handle: '@le_stacio',
    platform: 'twitter',
    alt: 'A Pixel 10 Pro with a Grip Case and Area 51 (Classified) skin',
    text: '@dbrand this is the best skin you robots have made so far'
  }],
  tank: {
    title: 'iPhone 17 Pro Max Tank Case',
    price: 49.95,
    listPrice: 59.95,
    devices: ['AirPods Pro 3', 'iPhone 18 Pro Max', 'iPhone 18 Pro', 'iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone Air', 'iPhone 16 Pro Max', 'iPhone 16 Pro', 'Galaxy S26 Ultra', 'Galaxy S25 Ultra', 'Pixel 11 Pro XL', 'Pixel 11 Pro', 'Pixel 10 Pro XL', 'Pixel 10 Pro', 'Other Smartphone'],
    addons: [{
      id: 'glass',
      label: '2x Screen Protectors',
      price: 19.95
    }, {
      id: 'napalm',
      label: 'Napalm Button Pack',
      price: 9.95
    }, {
      id: 'plasma',
      label: 'Plasma Button Pack',
      price: 9.95
    }, {
      id: 'recon',
      label: 'Recon Button Pack',
      price: 9.95
    }, {
      id: 'airpods',
      label: 'AirPods Pro 3 Tank Case',
      price: 29.95
    }],
    manifesto: 'They sell you fragility, then sell you fear. Glass and metal. Planned obsolescence for the dopamine machine. Anxiety is the business model. If the Tank Case cannot save you, nothing can.',
    gallery: ['The back of an iPhone 17 Pro Max with our Tank Case on it, seen from an upward angle', 'A close-up of the lower back of our Tank Case — ridges, valleys, and grip strips', 'Customizable colored buttons', 'An overwhelming number of textures', 'Includes powerful magnets'],
    features: [{
      title: 'Tactical Design',
      body: 'Every phone case you\'ve ever owned was a collection of sacrifices and compromises. It had to be thinner, so it was less protective. It had to be sleek, so it wasn\'t grippy. The Tank Case sacrifices nothing.',
      imageAlt: 'The back of an iPhone 17 Pro Max with our Tank Case, from an upward angle'
    }, {
      title: 'Relentless Grip',
      body: 'Every contour is sculpted with purpose: ridges, grooves, and valleys that lock your fingers into place. Other cases slip. The Tank Case won\'t let go.',
      imageAlt: 'Close-up of the ridges and grip strips across the back of the Tank Case'
    }, {
      title: 'Maximum Protection',
      body: 'That expensive, thin, fragile slab of metal and glass that you carry around all day? It wasn\'t an accident - it was a choice, made by soulless executives who insist that less is more. The Tank Case disagrees.',
      imageAlt: 'Close-up from the right side showing the pronounced bottom'
    }, {
      title: 'Sensory Overload',
      body: 'Smooth plastic isn\'t design. It\'s neglect. The Tank Case layers ten unique textures across its surface. The Tank Case doesn\'t take shortcuts.',
      imageAlt: 'Close-up of the varying topographical shifts and textures'
    }, {
      title: 'Modular Buttons',
      body: 'Clicky, durable, and hot-swappable with custom packs. Each has its own unique surface geometry, engineered for recognition by touch. The Tank Case defies standard-issue.',
      imageAlt: 'Orange Napalm buttons on the side of the Tank Case'
    }, {
      title: 'Ironclad Magnets',
      body: 'Thin magnets are weak. With the strongest magnets we\'ve ever built, Tank Case delivers uncompromising MagSafe performance. The Tank Case is locked in.',
      imageAlt: 'The center magnetic module: a triangle with an eye, surrounded by ridges'
    }, {
      title: 'Screen Security',
      body: 'Its raised lip rises above the glass, keeping it shielded from face-down falls. The Tank Case rejects gravity.',
      imageAlt: 'Front view showing the raised lip at the top of the device'
    }, {
      title: 'Camera Fortification',
      body: 'Overbuilt edges protect even the most obnoxious camera housings. The Tank Case rises above.',
      imageAlt: 'The unobstructed camera module protected by the Tank Case'
    }, {
      title: 'Camera Control',
      body: 'Even Apple hasn\'t been able to achieve perfection with their own cases. The Tank Case succeeds where all others fail.',
      imageAlt: 'The Camera Control cutout at an angle'
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.DeviceTile = __ds_scope.DeviceTile;

__ds_ns.FeatureList = __ds_scope.FeatureList;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.SocialPost = __ds_scope.SocialPost;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
