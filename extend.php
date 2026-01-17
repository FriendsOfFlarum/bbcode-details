<?php

/*
 * This file is part of fof/bbcode-details.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Extend;
use s9e\TextFormatter\Configurator;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Formatter())
        ->configure(function (Configurator $configurator) {
            $configurator->BBCodes->addCustom(
                '[DETAILS title={TEXT1;optional} open={ANYTHING?} name={SIMPLETEXT?}]{TEXT2}[/DETAILS]',
                <<<'XML'
<details class="bbcode-details">
    <xsl:copy-of select="@name"/>

    <xsl:if test="@open">
        <xsl:attribute name="open">open</xsl:attribute>
    </xsl:if>

    <xsl:if test="string-length(normalize-space(@title)) &gt; 0">
        <summary>{@title}</summary>
    </xsl:if>

    <div>
        <xsl:apply-templates/>
    </div>
</details>
XML
            );
        }),
];
