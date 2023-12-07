export default `<category name="Snippets" colour="#a87132">
<label text="Centered sprite" />
<block type="project_loaded">
<statement name="actions">
  <block type="assets_add">
    <field name="assetName">asset</field>
    <value name="texture">
      <shadow type="text">
        <field name="TEXT">https://pixijs.com/assets/flowerTop.png</field>
      </shadow>
    </value>
    <next>
      <block type="sprite_new_notexture">
        <field name="spriteVar">character</field>
        <next>
          <block type="sprite_set_texture">
            <field name="spriteVar">character</field>
            <field name="assetName">asset</field>
            <next>
              <block type="sprite_set_position">
                <field name="selSprite">character</field>
                <field name="axis">x</field>
                <value name="value">
                  <block type="math_arithmetic">
                    <field name="OP">DIVIDE</field>
                    <value name="A">
                      <shadow type="math_number">
                        <field name="NUM">1</field>
                      </shadow>
                      <block type="app_data_get_screen">
                        <field name="optType">width</field>
                      </block>
                    </value>
                    <value name="B">
                      <shadow type="math_number">
                        <field name="NUM">2</field>
                      </shadow>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="sprite_set_position">
                    <field name="selSprite">character</field>
                    <field name="axis">y</field>
                    <value name="value">
                      <block type="math_arithmetic">
                        <field name="OP">DIVIDE</field>
                        <value name="A">
                          <shadow type="math_number">
                            <field name="NUM">1</field>
                          </shadow>
                          <block type="app_data_get_screen">
                            <field name="optType">height</field>
                          </block>
                        </value>
                        <value name="B">
                          <shadow type="math_number">
                            <field name="NUM">2</field>
                          </shadow>
                        </value>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</statement>
</block>
</category>`;