<script>
	import Text from "../components/Text.svelte";
	import Row from "../components/Row.svelte";
    import Column from "./Column.svelte";
    import Link from "./Link.svelte";
</script>

<footer class="bg-bg py-10">
    <Column>
        <Row center>
            <a href="https://www.instagram.com/pvdthings" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fdd835" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
            </a>
            <a href="https://twitter.com/pvdthings" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fdd835" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
            </a>
            <a href="https://linkedin.com/company/starboardcoop/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fdd835" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.01" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
            </a>
            <a href="https://discord.gg/DbYtbFYkJD" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-discord" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fdd835" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="9" cy="12" r="1" />
                    <circle cx="15" cy="12" r="1" />
                    <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0" />
                    <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                    <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5" />
                    <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5" />
                </svg>
            </a>
        </Row>
        <Text light center>
            A project by <Link to="https://starboard.coop">Starboard Co-op</Link>
        </Text>
    </Column>
</footer>