
import { URL } from 'node:url';
import { Snowflake } from 'discord-api-types/globals';

interface EscapeMarkdownOptions {
    /**
     * Whether to escape bolds
     *
     * @defaultValue true
     */
    bold?: boolean;
    /**
     * Whether to escape bulleted lists
     *
     * @defaultValue false
     */
    bulletedList?: boolean;
    /**
     * Whether to escape code blocks
     *
     * @defaultValue true
     */
    codeBlock?: boolean;
    /**
     * Whether to escape text inside code blocks
     *
     * @defaultValue true
     */
    codeBlockContent?: boolean;
    /**
     * Whether to escape escape characters
     *
     * @defaultValue true
     */
    escape?: boolean;
    /**
     * Whether to escape headings
     *
     * @defaultValue false
     */
    heading?: boolean;
    /**
     * Whether to escape inline code
     *
     * @defaultValue true
     */
    inlineCode?: boolean;
    /**
     * Whether to escape text inside inline code
     *
     * @defaultValue true
     */
    inlineCodeContent?: boolean;
    /**
     * Whether to escape italics
     *
     * @defaultValue true
     */
    italic?: boolean;
    /**
     * Whether to escape masked links
     *
     * @defaultValue false
     */
    maskedLink?: boolean;
    /**
     * Whether to escape numbered lists
     *
     * @defaultValue false
     */
    numberedList?: boolean;
    /**
     * Whether to escape spoilers
     *
     * @defaultValue true
     */
    spoiler?: boolean;
    /**
     * Whether to escape strikethroughs
     *
     * @defaultValue true
     */
    strikethrough?: boolean;
    /**
     * Whether to escape underlines
     *
     * @defaultValue true
     */
    underline?: boolean;
}
/**
 * Escapes any Discord-flavour markdown in a string.
 *
 * @param text - Content to escape
 * @param options - Options for escaping the markdown
 */
declare function escapeMarkdown(text: string, options?: EscapeMarkdownOptions): string;
/**
 * Escapes code block markdown in a string.
 *
 * @param text - Content to escape
 */
declare function escapeCodeBlock(text: string): string;
/**
 * Escapes inline code markdown in a string.
 *
 * @param text - Content to escape
 */
declare function escapeInlineCode(text: string): string;
/**
 * Escapes italic markdown in a string.
 *
 * @param text - Content to escape
 */
declare function escapeItalic(text: string): string;
/**
 * Escapes bold markdown in a string.
 *
 * @param text - Content to escape
 */
declare function escapeBold(text: string): string;
/**
 * Escapes underline markdown in a string.
 *
 * @param text - Content to escape
 */
declare function escapeUnderline(text: string): string;
/**
 * Escapes strikethrough markdown in a string.
 *
 * @param text - Content to escape
 */
declare function escapeStrikethrough(text: string): string;
/**
 * Escapes spoiler markdown in a string.
 *
 * @param text - Content to escape
 */
declare function escapeSpoiler(text: string): string;
/**
 * Escapes escape characters in a string.
 *
 * @param text - Content to escape
 */
declare function escapeEscape(text: string): string;
/**
 * Escapes heading characters in a string.
 *
 * @param text - Content to escape
 */
declare function escapeHeading(text: string): string;
/**
 * Escapes bulleted list characters in a string.
 *
 * @param text - Content to escape
 */
declare function escapeBulletedList(text: string): string;
/**
 * Escapes numbered list characters in a string.
 *
 * @param text - Content to escape
 */
declare function escapeNumberedList(text: string): string;
/**
 * Escapes masked link characters in a string.
 *
 * @param text - Content to escape
 */
declare function escapeMaskedLink(text: string): string;

/**
 * Wraps the content inside a codeblock with no language
 *
 * @param content - The content to wrap
 */
declare function codeBlock<C extends string>(content: C): `\`\`\`\n${C}\n\`\`\``;
/**
 * Wraps the content inside a codeblock with the specified language
 *
 * @param language - The language for the codeblock
 * @param content - The content to wrap
 */
declare function codeBlock<L extends string, C extends string>(language: L, content: C): `\`\`\`${L}\n${C}\n\`\`\``;
/**
 * Wraps the content inside \`backticks\`, which formats it as inline code
 *
 * @param content - The content to wrap
 */
declare function inlineCode<C extends string>(content: C): `\`${C}\``;
/**
 * Formats the content into italic text
 *
 * @param content - The content to wrap
 */
declare function italic<C extends string>(content: C): `_${C}_`;
/**
 * Formats the content into bold text
 *
 * @param content - The content to wrap
 */
declare function bold<C extends string>(content: C): `**${C}**`;
/**
 * Formats the content into underscored text
 *
 * @param content - The content to wrap
 */
declare function underscore<C extends string>(content: C): `__${C}__`;
/**
 * Formats the content into strike-through text
 *
 * @param content - The content to wrap
 */
declare function strikethrough<C extends string>(content: C): `~~${C}~~`;
/**
 * Formats the content into a quote. This needs to be at the start of the line for Discord to format it
 *
 * @param content - The content to wrap
 */
declare function quote<C extends string>(content: C): `> ${C}`;
/**
 * Formats the content into a block quote. This needs to be at the start of the line for Discord to format it
 *
 * @param content - The content to wrap
 */
declare function blockQuote<C extends string>(content: C): `>>> ${C}`;
/**
 * Wraps the URL into `<>`, which stops it from embedding
 *
 * @param url - The URL to wrap
 */
declare function hideLinkEmbed<C extends string>(url: C): `<${C}>`;
/**
 * Wraps the URL into `<>`, which stops it from embedding
 *
 * @param url - The URL to wrap
 */
declare function hideLinkEmbed(url: URL): `<${string}>`;
/**
 * Formats the content and the URL into a masked URL
 *
 * @param content - The content to display
 * @param url - The URL the content links to
 */
declare function hyperlink<C extends string>(content: C, url: URL): `[${C}](${string})`;
/**
 * Formats the content and the URL into a masked URL
 *
 * @param content - The content to display
 * @param url - The URL the content links to
 */
declare function hyperlink<C extends string, U extends string>(content: C, url: U): `[${C}](${U})`;
/**
 * Formats the content and the URL into a masked URL
 *
 * @param content - The content to display
 * @param url - The URL the content links to
 * @param title - The title shown when hovering on the masked link
 */
declare function hyperlink<C extends string, T extends string>(content: C, url: URL, title: T): `[${C}](${string} "${T}")`;
/**
 * Formats the content and the URL into a masked URL
 *
 * @param content - The content to display
 * @param url - The URL the content links to
 * @param title - The title shown when hovering on the masked link
 */
declare function hyperlink<C extends string, U extends string, T extends string>(content: C, url: U, title: T): `[${C}](${U} "${T}")`;
/**
 * Wraps the content inside spoiler (hidden text)
 *
 * @param content - The content to wrap
 */
declare function spoiler<C extends string>(content: C): `||${C}||`;
/**
 * Formats a user ID into a user mention
 *
 * @param userId - The user ID to format
 */
declare function userMention<C extends Snowflake>(userId: C): `<@${C}>`;
/**
 * Formats a channel ID into a channel mention
 *
 * @param channelId - The channel ID to format
 */
declare function channelMention<C extends Snowflake>(channelId: C): `<#${C}>`;
/**
 * Formats a role ID into a role mention
 *
 * @param roleId - The role ID to format
 */
declare function roleMention<C extends Snowflake>(roleId: C): `<@&${C}>`;
/**
 * Formats an application command name, subcommand group name, subcommand name, and ID into an application command mention
 *
 * @param commandName - The application command name to format
 * @param subcommandGroupName - The subcommand group name to format
 * @param subcommandName - The subcommand name to format
 * @param commandId - The application command ID to format
 */
declare function chatInputApplicationCommandMention<N extends string, G extends string, S extends string, I extends Snowflake>(commandName: N, subcommandGroupName: G, subcommandName: S, commandId: I): `</${N} ${G} ${S}:${I}>`;
/**
 * Formats an application command name, subcommand name, and ID into an application command mention
 *
 * @param commandName - The application command name to format
 * @param subcommandName - The subcommand name to format
 * @param commandId - The application command ID to format
 */
declare function chatInputApplicationCommandMention<N extends string, S extends string, I extends Snowflake>(commandName: N, subcommandName: S, commandId: I): `</${N} ${S}:${I}>`;
/**
 * Formats an application command name and ID into an application command mention
 *
 * @param commandName - The application command name to format
 * @param commandId - The application command ID to format
 */
declare function chatInputApplicationCommandMention<N extends string, I extends Snowflake>(commandName: N, commandId: I): `</${N}:${I}>`;
/**
 * Formats an emoji ID into a fully qualified emoji identifier
 *
 * @param emojiId - The emoji ID to format
 */
declare function formatEmoji<C extends Snowflake>(emojiId: C, animated?: false): `<:_:${C}>`;
/**
 * Formats an emoji ID into a fully qualified emoji identifier
 *
 * @param emojiId - The emoji ID to format
 * @param animated - Whether the emoji is animated or not. Defaults to `false`
 */
declare function formatEmoji<C extends Snowflake>(emojiId: C, animated?: true): `<a:_:${C}>`;
/**
 * Formats an emoji ID into a fully qualified emoji identifier
 *
 * @param emojiId - The emoji ID to format
 * @param animated - Whether the emoji is animated or not. Defaults to `false`
 */
declare function formatEmoji<C extends Snowflake>(emojiId: C, animated?: boolean): `<:_:${C}>` | `<a:_:${C}>`;
/**
 * Formats a channel link for a direct message channel.
 *
 * @param channelId - The channel's id
 */
declare function channelLink<C extends Snowflake>(channelId: C): `https://discord.com/channels/@me/${C}`;
/**
 * Formats a channel link for a guild channel.
 *
 * @param channelId - The channel's id
 * @param guildId - The guild's id
 */
declare function channelLink<C extends Snowflake, G extends Snowflake>(channelId: C, guildId: G): `https://discord.com/channels/${G}/${C}`;
/**
 * Formats a message link for a direct message channel.
 *
 * @param channelId - The channel's id
 * @param messageId - The message's id
 */
declare function messageLink<C extends Snowflake, M extends Snowflake>(channelId: C, messageId: M): `https://discord.com/channels/@me/${C}/${M}`;
/**
 * Formats a message link for a guild channel.
 *
 * @param channelId - The channel's id
 * @param messageId - The message's id
 * @param guildId - The guild's id
 */
declare function messageLink<C extends Snowflake, M extends Snowflake, G extends Snowflake>(channelId: C, messageId: M, guildId: G): `https://discord.com/channels/${G}/${C}/${M}`;
/**
 * Formats a date into a short date-time string
 *
 * @param date - The date to format, defaults to the current time
 */
declare function time(date?: Date): `<t:${bigint}>`;
/**
 * Formats a date given a format style
 *
 * @param date - The date to format
 * @param style - The style to use
 */
declare function time<S extends TimestampStylesString>(date: Date, style: S): `<t:${bigint}:${S}>`;
/**
 * Formats the given timestamp into a short date-time string
 *
 * @param seconds - The time to format, represents an UNIX timestamp in seconds
 */
declare function time<C extends number>(seconds: C): `<t:${C}>`;
/**
 * Formats the given timestamp into a short date-time string
 *
 * @param seconds - The time to format, represents an UNIX timestamp in seconds
 * @param style - The style to use
 */
declare function time<C extends number, S extends TimestampStylesString>(seconds: C, style: S): `<t:${C}:${S}>`;
/**
 * The {@link https://discord.com/developers/docs/reference#message-formatting-timestamp-styles | message formatting timestamp styles} supported by Discord
 */
declare const TimestampStyles: {
    /**
     * Short time format, consisting of hours and minutes, e.g. 16:20
     */
    readonly ShortTime: "t";
    /**
     * Long time format, consisting of hours, minutes, and seconds, e.g. 16:20:30
     */
    readonly LongTime: "T";
    /**
     * Short date format, consisting of day, month, and year, e.g. 20/04/2021
     */
    readonly ShortDate: "d";
    /**
     * Long date format, consisting of day, month, and year, e.g. 20 April 2021
     */
    readonly LongDate: "D";
    /**
     * Short date-time format, consisting of short date and short time formats, e.g. 20 April 2021 16:20
     */
    readonly ShortDateTime: "f";
    /**
     * Long date-time format, consisting of long date and short time formats, e.g. Tuesday, 20 April 2021 16:20
     */
    readonly LongDateTime: "F";
    /**
     * Relative time format, consisting of a relative duration format, e.g. 2 months ago
     */
    readonly RelativeTime: "R";
};
/**
 * The possible values, see {@link TimestampStyles} for more information
 */
type TimestampStylesString = (typeof TimestampStyles)[keyof typeof TimestampStyles];
/**
 * An enum with all the available faces from Discord's native slash commands
 */
declare enum Faces {
    /**
     * ¯\\_(ツ)\\_/¯
     */
    Shrug = "\u00AF\\_(\u30C4)\\_/\u00AF",
    /**
     * (╯°□°）╯︵ ┻━┻
     */
    Tableflip = "(\u256F\u00B0\u25A1\u00B0\uFF09\u256F\uFE35 \u253B\u2501\u253B",
    /**
     * ┬─┬ ノ( ゜-゜ノ)
     */
    Unflip = "\u252C\u2500\u252C \u30CE( \u309C-\u309C\u30CE)"
}

export { EscapeMarkdownOptions, Faces, TimestampStyles, TimestampStylesString, blockQuote, bold, channelLink, channelMention, chatInputApplicationCommandMention, codeBlock, escapeBold, escapeBulletedList, escapeCodeBlock, escapeEscape, escapeHeading, escapeInlineCode, escapeItalic, escapeMarkdown, escapeMaskedLink, escapeNumberedList, escapeSpoiler, escapeStrikethrough, escapeUnderline, formatEmoji, hideLinkEmbed, hyperlink, inlineCode, italic, messageLink, quote, roleMention, spoiler, strikethrough, time, underscore, userMention };
