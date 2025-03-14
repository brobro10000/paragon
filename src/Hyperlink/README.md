---
title: 'Hyperlink'
type: 'component'
components:
- Hyperlink
categories:
- Buttonlike
status: 'Needs Work'
designStatus: 'Done'
devStatus: 'Done'
notes: |
  Improve prop naming. Deprecate content prop.
  Use React.forwardRef for ref forwarding.
---

## minimal usage

```jsx live
<Hyperlink destination="https://www.edx.org">
  edX.org
</Hyperlink>
```

## with blank target

```jsx live
<Hyperlink destination="https://www.edx.org" target="_blank">
  edX.org
</Hyperlink>
```

### blank target without Icon

```jsx live
<Hyperlink destination="https://www.edx.org" target="_blank" showLaunchIcon={false}>
  edX.org
</Hyperlink>
```

## with onClick

```jsx live
<Hyperlink
  destination="https://www.edx.org"
  target="_blank"
  onClick={e => {
    e.preventDefault();
    console.log('click');
  }}
>
  edX.org
</Hyperlink>
```

## with icon

```jsx live
<Hyperlink destination="https://www.edx.org">
  <Icon
    id="SampleIcon"
    src={Add}
    className="fa fa-book"
    screenReaderText="Visit edX Home"
  />
</Hyperlink>
```

## color variants

```jsx live
<div className="d-flex flex-column">
    <Hyperlink destination="https://www.edx.org">
      Default
    </Hyperlink>
    
    <Hyperlink variant="muted" destination="https://www.edx.org">
      Muted
    </Hyperlink>
    
    <Hyperlink variant="brand" destination="https://www.edx.org">
      Brand
    </Hyperlink>
</div>
```

## link variants

```jsx live
<div className="row">
  <div className="col-2">
    <Hyperlink destination="https://www.edx.org">
      Standalone
    </Hyperlink>
  </div>
    
  <div className="col-2">
    <Hyperlink isInline destination="https://www.edx.org">
      Inline
    </Hyperlink>
  </div>
</div>
```

## with custom link element (e.g., using a router)

``Hyperlink`` typically relies on the standard HTML anchor tag (i.e., ``a``); however, this behavior may be overriden when the destination link is to an internal route where it should be using routing instead (e.g., ``Link`` from React Router).

```jsx live
<Hyperlink
  as={GatsbyLink}
  to="/components/button"
>
  Button
</Hyperlink>
```