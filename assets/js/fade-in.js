// starts invisible (see body.is-entering in style.css), then
// fades in right after load — makes page-to-page navigation
// feel like one continuous crossfade instead of an abrupt cut
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.classList.remove('is-entering');
    document.body.classList.add('is-entered');
  });
});
