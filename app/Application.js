Ext.define('Planche.Application', {
    name: 'Planche',

    extend  : 'Ext.app.Application',
    requires: [
        'Planche.lib.Base64',
        'Planche.lib.DBUtil',
        'Planche.lib.Menu',
        'Planche.lib.Query',
        'Planche.lib.QueryAlignment',
        'Planche.lib.QueryParser',
        'Planche.lib.QueryTokenType',
        'Planche.lib.SchemaTree',
        'Planche.lib.SchemaUtil',
        'Planche.lib.Window',
        'Planche.lib.QuickCommand',
        'Planche.dbms.mysql',
        'Planche.overrides.FixMenuBug',
        'Planche.overrides.RadioGroup'
    ],
    views   : [
        'layout.ConnectTab',
        'layout.HistoryTab',
        'layout.InfoTab',
        'layout.MessageTab',
        'layout.QueryEditor',
        'layout.QueryTab',
        'layout.QueryTabPanel',
        'layout.ResultTabPanel',
        'layout.SchemaTree',
        'layout.TableDataTab',
        'layout.Toolbar',
        'database.CopyDatabaseWindow',
        'database.DatabaseSchemaTree',
        'database.CopyDatabaseTargetList',
        'database.SchemaToHTML',
        'database.DownloadToCSVTargetList',
        'database.DownloadToCSV',
        'table.EditIndexWindow',
        'table.EditSchemaWindow',
        'table.TableIndexesTab',
        'table.TableInfoTab',
        'table.TablePropertiesTab',
        'table.TableSchemaTab',
        'table.TableSQLTab',
        'user.Grant',
        'user.GrantSchemaTree',
        'user.GrantUserList',
        'user.GrantPrivList',
        'user.UserAdd'
    ],

    controllers: [
        'command.Find',
        'command.Flush',
        'command.Process',
        'command.Quick',
        'command.Status',
        'command.Variables',
        'connection.Connect',
        'connection.NewConnect',
        'database.CreateDatabase',
        'database.CopyDatabaseWindow',
        'database.SchemaToHTML',
        'database.DownloadToCSV',
        'menu.Connection',
        'menu.Query',
        'menu.Database',
        'menu.Edit',
        'menu.Table',
        'menu.Export',
        'menu.Tools',
        // 'menu.Favorites',
        // 'menu.Help',
        // 'menu.Other',
        // 'menu.Powertools',
        // 'menu.Window'
        'query.Token',

        'layout.SchemaTreeContextMenu',
        'layout.SchemaTree',
        'layout.QueryTabPanel',
        'layout.QueryEditor',
        'layout.ResultTabPanel',
        'layout.QueryTab',
        'layout.MessageTab',
        'layout.TableDataTab',
        'layout.InfoTab',
        'layout.HistoryTab',
        'layout.ConnectTab',
        'layout.Toolbar',

        'table.EditIndexWindow',
        'table.EditSchemaWindow',
        'table.AdvancedProperties',
        'table.EditTextColumn',
        'table.ReorderColumns',
        'table.TableSchemaTab',
        'table.TablePropertiesTab',
        'table.TableIndexesTab',
        'table.TableSQLTab',
        'table.TableInfoTab',

        'Main',

        'user.Grant',
        'user.UserAdd'
    ],

    stores: [
        'GrantSchemaTree',
        'SchemaTree',
        'DatabaseSchemaTree'
    ]
});
